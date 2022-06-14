import { PropsWithChildren, useCallback } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useMenuItemV2 } from "../data/firebase/firestore";

interface Props {
    id: string;
}
function MenuItemChild(props: PropsWithChildren<Props>) {
    const { id } = props;
    const menuItem = useMenuItemV2(id);
    const { name = "", price = 0 } = menuItem?.data!;
    const { addItem } = useShoppingCart();

    const handleAddItem = useCallback(() => {
        addItem({
            id,
            name: name,
            price: price * 100,
            currency: "EUR",
        });
    }, [addItem, id, name, price]);

    if (!menuItem) return null;
    return (
        <div>
            <h4>
                {id} - {name}: {price} Euro
            </h4>
            {price && <button onClick={handleAddItem}>Add to cart</button>}
        </div>
    );
}

export default MenuItemChild;
