type MenuItemSelector = {
    restaurantId: string;
} & {
    onDiscount: boolean;
};

export interface MenuItem {
    id: string;
    parentId?: string;
    menuItemId: string;
    name: string;
    price: number;
    description: string;
    selector: MenuItemSelector;
}

const menuItems: MenuItem[] = [
    {
        id: "1",
        menuItemId: "1",
        name: "Pizza",
        price: 10,
        description: "Pizza",
        selector: {
            restaurantId: "1",
            onDiscount: false,
        },
    },
    {
        id: "2",
        menuItemId: "2",
        name: "Cheap Pizza",
        price: 6,
        description: "Pizza",
        selector: {
            restaurantId: "1",
            onDiscount: true,
        },
    },
    {
        id: "3",
        menuItemId: "3",
        name: "Pizza with tomato",
        parentId: "1",
        price: 15,
        description: "Pizza",
        selector: {
            restaurantId: "2",
            onDiscount: false,
        },
    },
];

export async function getMenuItems(ids?: string[]): Promise<MenuItem[]> {
    if (!ids) {
        return menuItems;
    }
    return menuItems.filter((item) => ids.includes(item.id));
}
