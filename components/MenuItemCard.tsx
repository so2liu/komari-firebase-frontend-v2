import { PropsWithChildren, Suspense, useCallback } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useImageUrl } from "../data/firebase/storage";
import Image from "next/image";

import MenuItemChild from "./MenuItemChild";
import BuyButtonGroup from "./BuyButtonGroup";

interface Props {
    id: string;
    name: string;
    price: number;
    imgSrc?: string;
    childIds?: string[];
}
function MenuItemCard(props: PropsWithChildren<Props>) {
    const { id, name, price, imgSrc, childIds } = props;
    const imageUrl = useImageUrl(imgSrc);

    return (
        <div
            style={{
                border: "1px solid black",
                borderRadius: "4px",
                margin: 8,
                padding: 8,
                display: "inline-block",
                width: 400,
            }}
        >
            {imageUrl && (
                <div
                    style={{
                        width: 200,
                        height: 100,
                        position: "relative",
                    }}
                >
                    <Image
                        src={imageUrl}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ marginRight: 16 }}>
                    {name}: {price && price + " Euro"}
                </span>
                {price && <BuyButtonGroup id={id} />}
            </div>
            {childIds?.map((childId) => (
                <Suspense key={childId} fallback={<div>Loading...</div>}>
                    <MenuItemChild id={childId} />
                </Suspense>
            ))}
        </div>
    );
}

export default MenuItemCard;
