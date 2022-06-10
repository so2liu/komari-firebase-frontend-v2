import type { PropsWithChildren } from "react";
import { CartProvider } from "use-shopping-cart";

function Cart(props: PropsWithChildren<{}>) {
    console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? "");
    return (
        <CartProvider
            cartMode="checkout-session"
            stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? ""}
            currency="EUR"
        >
            <div style={{ padding: 16 }}>{props.children}</div>
        </CartProvider>
    );
}

export default Cart;
