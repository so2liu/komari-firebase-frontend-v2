import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import axios from "axios";
import { app } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { addDoc, doc, onSnapshot } from "firebase/firestore";
import { FormEventHandler, useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import { useShoppingCart } from "use-shopping-cart";
import { orderCollection } from "../data/firebase/client";
import { userAtom } from "../recoil/user";
// import { fetchPostJSON } from "../utils/apiHelpers";

interface CartDetailItem {
    id: string;
    name: string;
    quantity: number;
    value: number;
    price: number;
    formattedValue: string;
    formattedPrice: string;
    currency: string;
}

type CardDetails = Record<string, CartDetailItem>;

type UseShoppingCart = {
    formattedTotalPrice: string;
    cartDetails: CardDetails;
    cartCount: number;
};

function CartSummary() {
    const {
        formattedTotalPrice,
        clearCart,
        cartDetails,
        cartCount,
        redirectToCheckout,
    } = useShoppingCart<UseShoppingCart>();

    const [deliver, setDeliver] = useState(false);
    const user = useRecoilValue(userAtom);
    console.log(user);

    const handleCheckout: FormEventHandler<HTMLFormElement> = useCallback(
        async (event) => {
            event.preventDefault();
            const res = await addDoc(orderCollection, {
                uid: user,
                orders: Object.values(cartDetails).map((item) => ({
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.value / 100,
                })),
                stripe: {
                    successRedirectPrefix: `${location.origin}/result?order_id=`,
                    cancelRedirect: `${location.origin}/checkout`,
                    sessionId: null,
                },
                partnerName: "taumi",
            } as any);
            console.log(res.id);

            onSnapshot(doc(orderCollection, res.id), (doc) => {
                const data = doc.data();
                console.log(data);
                if (data?.stripe?.sessionId) {
                    redirectToCheckout(doc.data()?.stripe?.sessionId);
                }
            });
        },
        // const response = await axios.post(
        //     "/api/checkout_sessions/cart",
        //     cartDetails,
        //     {
        //         params: {
        //             deliver,
        //         },
        //     }
        // );
        // await redirectToCheckout(response.data.id);
        [cartDetails, redirectToCheckout, user]
    );

    return (
        <form onSubmit={handleCheckout}>
            <h2>Cart Summary</h2>
            <p suppressHydrationWarning>
                <strong>{cartCount}</strong> items in cart.
            </p>
            <p>
                <strong>{formattedTotalPrice}</strong>
            </p>
            <button type="submit">Checkout</button>
            <button type="button" onClick={clearCart}>
                Clear Cart
            </button>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={deliver}
                            onChange={(event) =>
                                setDeliver(event.target.checked)
                            }
                        />
                    }
                    label="Deliver"
                />
            </FormGroup>
        </form>
    );
}

export default CartSummary;
