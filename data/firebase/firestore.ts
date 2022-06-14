import { app } from ".";
import {
    collection,
    CollectionReference,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { MenuItemV2, MenuV2 } from "../menuItem";
import useSWR from "swr";

const db = getFirestore(app);
const dbRef = collection(db, "menuV2") as CollectionReference<MenuItemV2>;
const basicQuery = [
    where("selector.restaurantId", "==", "taumi"),
    where("selector.valid", "==", true),
];
export const getMenu = async () => {
    const q = query(dbRef);
    const docs = await getDocs(q);
    const menu: MenuV2 = docs.docs.map((doc) => doc.data());
    return menu;
};



export const useMenuV2 = (category: string) => {
    const [menu, setMenu] = useState<MenuV2>([]);
    useEffect(() => {
        const q = query(
            dbRef,
            where("selector.category", "==", category),
            ...basicQuery
        );
        const querySnapshot = getDocs(q);
        querySnapshot.then((snapshot) => {
            const data = snapshot.docs.map((doc) => doc.data());
            setMenu(data.filter((i) => !i.parentSkuId));
        });
    }, [category]);
    return menu;
};

export const useMenuItemV2 = (skuId: string) => {
    const fetcher = async (skuId: string) => {
        const q = query(dbRef, ...basicQuery, where("skuId", "==", skuId));
        const querySnapshot = getDocs(q);
        const snapshot = await querySnapshot;
        if (snapshot.size > 1) {
            throw new Error(
                `More than one menu item found for skuId: ${skuId}`
            );
        }
        const data = snapshot.docs[0].data();
        return data;
    };
    return useSWR(skuId, fetcher, { suspense: true });
};
