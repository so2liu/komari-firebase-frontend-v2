import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { PropsWithChildren, useEffect } from "react";
import Cart from "../../components/Cart";
import CartSummary from "../../components/CartSummary";
import MenuItemCard from "../../components/MenuItemCard";
import { getMenu, useMenuV2 } from "../../data/firebase/firestore";
import { MenuV2 } from "../../data/menuItem";
import { capitalizeStart } from "../../utils/stringUtils";

interface Props {
    menu: MenuV2;
}
function Sushi(props: PropsWithChildren<Props>) {
    // const menu = useMenuV2(capitalizeStart(category as string));
    const menu = props.menu;
    console.log("length", menu?.length);
    console.log("props", Object.keys(props));
    return (
        <Cart>
            <div>
                <section>
                    <CartSummary />
                </section>
                <section>
                    <h1>Sushi</h1>
                    {menu?.map((item) => (
                        <MenuItemCard
                            key={item.skuId}
                            id={item.skuId}
                            name={item.name}
                            price={item.price!}
                            childIds={item.childSkuIds}
                        />
                    ))}
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
    const filteredMenu = menu.filter(
        (item) => item.selector.category === capitalizeStart(category as string)
    );
    console.log({ category, context, menuLength: filteredMenu.length });
    return {
        props: {
            menu: filteredMenu,
        },
    };
};
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { category: "sushi" } }],
        fallback: true,
    };
};
