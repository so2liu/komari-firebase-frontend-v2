import { isNull } from "lodash";
import { PropsWithChildren, useCallback } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useMenuItemV2 } from "../data/firebase/client";
import BuyButtonGroup from "./BuyButtonGroup";

interface Props {
    id: string;
}
function MenuItemChild(props: PropsWithChildren<Props>) {
    const { id } = props;
    const menuItem = useMenuItemV2(id);
    const { name = "", price = 0 } = menuItem?.data!;

    if (!menuItem) return null;
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 4,
            }}
        >
            <span style={{ marginRight: 16 }}>
                {id} - {name}: {price} Euro
            </span>
            {price && <BuyButtonGroup skuId={id} />}
        </div>
    );
}

export default MenuItemChild;
