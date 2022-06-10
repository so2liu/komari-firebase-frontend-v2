import { NextPage } from "next";
import CartSummary from "../components/CartSummary";
import Cart from "../components/Cart";
import MenuItemCard from "../components/MenuItemCard";

const CheckoutPage: NextPage = () => {
    return (
        <Cart>
            <div>
                <h1>Checkout</h1>
                <CartSummary />
                <MenuItemCard id="1" />
                <MenuItemCard id="3" />
            </div>
        </Cart>
    );
};

export default CheckoutPage;
