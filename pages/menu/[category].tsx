import { useRouter } from "next/router";
import Cart from "../../components/Cart";
import CartSummary from "../../components/CartSummary";
import MenuItemCard from "../../components/MenuItemCard";
import { useMenuV2 } from "../../data/firebase/firestore";
import { capitalizeStart } from "../../utils/stringUtils";

function Sushi() {
    const router = useRouter();
    const { category = "sushi" } = router.query;
    const menu = useMenuV2(capitalizeStart(category as string));

    return (
        <Cart>
            <div>
                <section>
                    <CartSummary />
                </section>
                <section>
                    <h1>Sushi</h1>
                    {menu.map((item) => (
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
