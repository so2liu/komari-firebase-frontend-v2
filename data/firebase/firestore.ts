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

export const getMenu = async () => {
    const restaurant = "komari";
    const querySnapshot = await getDocs(collection(db, restaurant));
    querySnapshot.forEach((doc) => {
        // const data = doc.data();
        // console.log(`${doc.id} =>`);
        // const blob = new Blob([JSON.stringify(data, null, 2)], {
        //     type: "application/json",
        // });
        // FileSaver.saveAs(blob, `${restaurant}-${doc.id}.json`);
    });
};

const dbRef = collection(db, "menuV2") as CollectionReference<MenuItemV2>;

const basicQuery = [
    where("selector.restaurantId", "==", "taumi"),
    where("selector.valid", "==", true),
];

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
