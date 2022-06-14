type MenuItemSelector = {
    restaurantId: string;
    discount: boolean;
    category: "Hauptspeise" | "Sushi" | "Sushiset" | "Angebote" | string;
    valid: boolean;
};

export interface MenuItemV2 {
    skuId: string;
    childSkuIds: string[] | null;
    parentSkuId: string | null;
    name: string;
    price: number | null;
    description: {
        DE: string;
        EN: string | null;
    } | null;
    imgSrc: string | null;
    selector: MenuItemSelector;
}

export type MenuV2 = MenuItemV2[];
