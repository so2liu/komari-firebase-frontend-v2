import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { PropsWithChildren, useEffect } from "react";
import Cart from "../../components/Cart";
import CartSummary from "../../components/CartSummary";
import MenuItemCard from "../../components/MenuItemCard";
import NaiveNav from "../../components/NaiveNav";
import { getMenu, useMenuV2 } from "../../data/firebase/firestore";
import { MenuV2 } from "../../data/menuItem";
import { capitalizeStart } from "../../utils/stringUtils";
import { Masonry } from "@mui/lab";
import { MENU_CATEGORY } from "../../constant/router";

interface Props {
    menu: MenuV2;
}
function Sushi(props: PropsWithChildren<Props>) {
    const restaurant = "taumi";
    const menu = props.menu.filter(
        (item) => item.selector.restaurantId === restaurant
    );
    console.log(menu);
    return (
        <Cart>
            <NaiveNav />
            <div>
                <section>
                    <CartSummary />
                </section>
                <section>
                    <Masonry columns={4}>
                        {menu?.map((item) => (
                            <MenuItemCard
                                key={item.skuId}
                                id={item.skuId}
                                name={item.name}
                                price={item.price!}
                                imgSrc={item.imgSrc ?? undefined}
                                childIds={item.childSkuIds ?? undefined}
                            />
                        ))}
                    </Masonry>
                </section>
            </div>
        </Cart>
    );
}
export default Sushi;

interface Params extends ParsedUrlQuery {
    category: string;
}
export const getStaticProps: GetStaticProps<Props, Params> = async (
    context
) => {
    const category = context.params?.category;
    const menu = await getMenu();
    const filteredMenu = menu?.filter(
        (item) => item.selector.category === capitalizeStart(category as string)
    );
    return {
        props: {
            menu: filteredMenu,
        },
    };
};
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: MENU_CATEGORY.map((category) => ({
            params: {
                category,
            },
        })),
        fallback: true,
    };
};
