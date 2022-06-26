import { app } from "./clientApp";
import {
    collection,
    CollectionReference,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { MenuItemV2, MenuV2 } from "../menuItem";
import { OrderItemV3 } from "../order";
import useSWR from "swr";
import { basicQuery } from "./common";

const menuCollection = collection(
    getFirestore(app),
    "menuV2"
) as CollectionReference<MenuItemV2>;

export const useMenuV2 = (category: string) => {
    const [menu, setMenu] = useState<MenuV2>([]);
    useEffect(() => {
        const q = query(
            menuCollection,
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
        const q = query(
            menuCollection,
            ...basicQuery,
            where("skuId", "==", skuId)
        );
        const querySnapshot = getDocs(q);
        const snapshot = await querySnapshot;
        if (snapshot.size > 1) {
            throw new Error(
                `More than one menu item found for skuId: ${skuId}`
            );
        }
        try {
            const data = snapshot.docs[0]?.data();
            return { id: snapshot.docs[0].id, ...data };
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };
    return useSWR(skuId, fetcher, { suspense: true });
};

export const orderCollection = collection(
    getFirestore(app),
    "ordersV3"
) as CollectionReference<OrderItemV3>;
