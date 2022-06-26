import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import Cart from "../../components/Cart";
import CartSummary from "../../components/CartSummary";
import MenuItemCard from "../../components/MenuItemCard";
import NaiveNav from "../../components/NaiveNav";
import { MenuItemV2, MenuV2 } from "../../data/menuItem";
import { capitalizeStart } from "../../utils/stringUtils";
import { Masonry } from "@mui/lab";
import { MENU_CATEGORY } from "../../constant/router";
import { app } from "../../data/firebase/clientApp";
import { getMenu } from "../../data/firebase/common";

interface Props {
    menu?: MenuV2;
}
function Sushi(props: PropsWithChildren<Props>) {
    const restaurant = "taumi";
    const [columnNum, setColumnNum] = useState(1);
    const gridRef = useCallback((node: HTMLDivElement) => {
        if (node) {
            const width = node.clientWidth;
            // 336是最小卡片宽度，16是column-gap
            const MIN_WIDTH = 355;
            const columnNum =
                Math.floor((width - MIN_WIDTH) / (MIN_WIDTH + 16)) + 1;
            console.log(columnNum);
            setColumnNum(columnNum);
        }
    }, []);
    const menu =
        props.menu?.filter(
            (item) => item.selector.restaurantId === restaurant
        ) ?? [];
    return (
        <Cart>
            <NaiveNav />
            <div ref={gridRef}>
                <section>
                    <CartSummary />
                </section>
                <section>
                    <Masonry columns={columnNum}>
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
    const menu = await getMenu(app);
    const filteredMenu = menu?.filter(
        (item: MenuItemV2) =>
            item.selector.category === capitalizeStart(category as string)
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
