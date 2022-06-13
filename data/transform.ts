import FileSaver from "file-saver";
import { komariMenuV1 } from "./komariMenuV1";
import { MenuItemV2, MenuV2 } from "./menuItem";
import { MenuItemV1, MenuV1, taumiMenuV1 } from "./taumiMenuV1";

function transformItemV1ToV2(
    skuId: string,
    restaurantId: string,
    discount: boolean,
    category: string,
    item: MenuItemV1
): MenuItemV2[] {
    if (item.sub.length === 1) {
        return [
            {
                skuId,
                name: skuId,
                price: item.sub[0].price,
                description: {
                    DE: item.DE ?? "",
                    EN: item.EN ?? undefined,
                },
                selector: {
                    restaurantId,
                    discount,
                    category,
                    valid: true,
                },
            },
        ];
    }

    const result: MenuItemV2[] = [
        {
            skuId,
            name: skuId,
            childSkuIds: item.sub.map((sub) => sub.id.toString()),
            description: {
                DE: item.DE ?? "",
                EN: item.EN ?? undefined,
            },
            selector: {
                restaurantId,
                discount,
                category,
                valid: true,
            },
        },
    ];

    const subRes: MenuItemV2[] = item.sub.map((subItem, index) => {
        return {
            skuId: String(subItem.id),
            name: subItem.subname ?? String(subItem.id),
            parentSkuId: skuId,
            price: subItem.price,
            selector: {
                hasParent: true,
                restaurantId,
                discount,
                category,
                valid: true,
            },
        };
    });

    return [...result, ...subRes];
}

export function transform(v1: MenuV1, restaurantId: string): MenuV2 {
    const menu: MenuV2 = [];
    Object.keys(v1).forEach((normalLevel) => {
        const categories = Object.keys(v1[normalLevel]);
        categories.forEach((category) => {
            const currentV1 = v1[normalLevel][category] as Record<
                string,
                MenuItemV1
            >;
            const list = Object.entries(currentV1).reduce((acc, curr) => {
                const [skuId, content] = curr;
                const current = transformItemV1ToV2(
                    skuId,
                    restaurantId,
                    normalLevel === "discount",
                    category,
                    content
                );
                return [...acc, ...current];
            }, [] as MenuV2);
            menu.push(...list);
        });
    });
    return menu;
}

console.log(transform(taumiMenuV1, "taumi"));
console.log(transform(komariMenuV1, "komari"));
const allMenu = transform(taumiMenuV1, "taumi").concat(
    transform(komariMenuV1, "komari")
);

// FileSaver(
//     new Blob([JSON.stringify(allMenu)], {
//         type: "application/json",
//     }),
//     "allMenu.json"
// );
