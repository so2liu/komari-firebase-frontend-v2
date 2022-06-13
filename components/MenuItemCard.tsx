import { PropsWithChildren, Suspense, useCallback } from "react";
import { useShoppingCart } from "use-shopping-cart";
import MenuItemChild from "./MenuItemChild";

interface Props {
    id: string;
    name: string;
    price: number;
    childIds?: string[];
}
function MenuItemCard(props: PropsWithChildren<Props>) {
    const { id, name, price, childIds } = props;
    const { addItem } = useShoppingCart();

    const handleAddItem = useCallback(() => {
        addItem({
            id,
            name: name,
            price: price * 100,
            currency: "EUR",
        });
    }, [addItem, id, name, price]);

    return (
        <div>
            <h4>
                {name}: {price} Euro
            </h4>
            {price && <button onClick={handleAddItem}>Add to cart</button>}
            {childIds?.map((childId) => (
                <Suspense key={childId} fallback={<div>Loading...</div>}>
                    <MenuItemChild id={childId} />
                </Suspense>
            ))}
        </div>
    );
}

export default MenuItemCard;
