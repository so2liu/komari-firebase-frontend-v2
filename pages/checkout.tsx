import { NextPage } from "next";
import CartSummary from "../components/CartSummary";
import Cart from "../components/Cart";
import "../data/transform";
import NaiveNav from "../components/NaiveNav";

const CheckoutPage: NextPage = () => {
    return (
        <Cart>
            <NaiveNav />
            <div>
                <h1>Checkout</h1>
                <CartSummary />
            </div>
        </Cart>
    );
};

export default CheckoutPage;
