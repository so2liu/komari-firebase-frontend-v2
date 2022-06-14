import { PropsWithChildren, Suspense, useCallback } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useImageUrl } from "../data/firebase/storage";
import Image from "next/image";

import MenuItemChild from "./MenuItemChild";

interface Props {
    id: string;
    name: string;
    price: number;
    imgSrc?: string;
    childIds?: string[];
}
function MenuItemCard(props: PropsWithChildren<Props>) {
    const { id, name, price, imgSrc, childIds } = props;
    const { addItem } = useShoppingCart();
    const imageUrl = useImageUrl(imgSrc);

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
            {imageUrl && (
                <div style={{ width: 200 }}>
                    <Image
                        src={imageUrl}
                        alt={name}
                        width={800}
                        height={450}
                        layout="responsive"
                        quality={65}
                    />
                </div>
            )}
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
