import { PropsWithChildren, useCallback } from "react";
import useSWR from "swr";
import { useShoppingCart } from "use-shopping-cart";
import { MenuItem } from "../data/menuItem";
import { fetchGetJSON } from "../utils/apiHelpers";

function MenuItemCard(props: PropsWithChildren<{ id: string }>) {
    const { addItem } = useShoppingCart();
    const menuItem = useSWR(
        ["menu_item", props.id],
        (endpoint: string, id: string) =>
            fetchGetJSON(`/api/${endpoint}/${props.id}`).then(
                (res) => res[0] as MenuItem
            )
    );

    const handleAddItem = useCallback(() => {
        const { data } = menuItem;
        if (data) {
            addItem({
                id: data.id,
                name: data.name,
                price: data.price * 100,
                currency: "EUR",
            });
        }
    }, [addItem, menuItem]);

    return (
        <div>
            <h4>
                {menuItem.data?.name}: {menuItem.data?.price} Euro
            </h4>
            <button onClick={handleAddItem}>Add to cart</button>
        </div>
    );
}

export default MenuItemCard;
