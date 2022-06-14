import { NextPage } from "next";
import CartSummary from "../components/CartSummary";
import Cart from "../components/Cart";
import MenuItemCard from "../components/MenuItemCard";
import { useEffect } from "react";
import { getMenu } from "../data/firebase/firestore";
import "../data/transform";
import NaiveNav from "../components/NaiveNav";

const CheckoutPage: NextPage = () => {
    useEffect(() => {
        getMenu();
    }, []);
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
