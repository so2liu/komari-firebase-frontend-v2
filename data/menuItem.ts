type MenuItemSelector = {
    restaurantId: string;
    discount: boolean;
    category: "Hauptspeise" | "Sushi" | "Sushiset" | "Angebote" | string;
    valid: boolean;
};

export interface MenuItemV2 {
    skuId: string;
    childSkuIds?: string[];
    parentSkuId?: string;
    name: string;
    price?: number;
    description?: {
        DE: string;
        EN?: string;
    };
    selector: MenuItemSelector;
}

export type MenuV2 = MenuItemV2[];

const menuItems: MenuV2 = [
    {
        skuId: "1",
        name: "Pizza",
        price: 10,
        description: {
            DE: "Pizza",
        },
        childSkuIds: ["3"],
        selector: {
            restaurantId: "1",
            discount: false,
            category: "main",
            valid: true,
        },
    },
    {
        skuId: "2",
        name: "Cheap Pizza",
        price: 6,
        description: {
            DE: "Cheap Pizza",
        },
        selector: {
            restaurantId: "1",
            discount: true,
            category: "main",
            valid: true,
        },
    },
    {
        skuId: "3",
        name: "Pizza with tomato",
        parentSkuId: "1",
        price: 15,
        selector: {
            restaurantId: "2",
            discount: false,
            category: "main",
            valid: true,
        },
    },
];

export async function getMenuItems(ids?: string[]): Promise<MenuItemV2[]> {
    if (!ids) {
        return menuItems;
    }
    return menuItems.filter((item) => ids.includes(item.skuId));
}
