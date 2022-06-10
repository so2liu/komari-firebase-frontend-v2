import { FormEventHandler, useCallback } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { fetchPostJSON } from "../utils/apiHelpers";

function CartSummary() {
    const {
        formattedTotalPrice,
        clearCart,
        cartDetails,
        cartCount,
        redirectToCheckout,
    } = useShoppingCart();

    const cart = useShoppingCart();
    console.log(cart);

    const handleCheckout: FormEventHandler<HTMLFormElement> = useCallback(
        async (event) => {
            event.preventDefault();
            const response = await fetchPostJSON(
                "/api/checkout_sessions/cart",
                cartDetails
            );
            if (response.statusCode > 399) {
                console.error(response.statusCode, response.body);
                return;
            }
            console.log("response", response);
            const result = await redirectToCheckout(response.id);
            console.log(result);
        },
        [cartDetails, redirectToCheckout]
    );

    console.log("CartSummary", cartDetails);
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
        </form>
    );
}

export default CartSummary;
