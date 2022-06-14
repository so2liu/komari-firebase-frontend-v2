import { isNull } from "lodash";
import { useCallback } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useMenuItemV2 } from "../data/firebase/firestore";

function BuyButtonGroup(props: { id: string }) {
    const { id } = props;
    const { addItem, incrementItem, decrementItem, quantity } = useShoppingCart(
        (s) => s.cartDetails[id]
    );
    const menuItem = useMenuItemV2(id);
    const { name = "", price = 0 } = menuItem?.data!;
    const handleAddItem = useCallback(() => {
        if (isNull(price)) {
            return;
        }
        addItem({
            id,
            name: name,
            price: price * 100,
            currency: "EUR",
        });
    }, [addItem, id, name, price]);

    if (!quantity) return <button onClick={handleAddItem}>Add to cart</button>;
    return (
        <div>
            <button onClick={() => incrementItem(id)}>+</button>
            <span style={{ margin: "0 8px" }}>{quantity}</span>
            <button onClick={() => decrementItem(id)}>-</button>
        </div>
    );
}

export default BuyButtonGroup;
