import { FirebaseApp } from "firebase/app";
import {
    where,
    collection,
    getFirestore,
    CollectionReference,
    query,
    getDocs,
    QueryConstraint,
} from "firebase/firestore";
import { MenuItemV2, MenuV2 } from "../menuItem";

export const basicQuery = [
    where("selector.restaurantId", "==", "taumi"),
    where("selector.valid", "==", true),
];
export const getMenu = async (app: FirebaseApp) => {
    const dbRef = collection(
        getFirestore(app),
        "menuV2"
    ) as CollectionReference<MenuItemV2>;
    const q = query(
        dbRef,
        where("selector.valid", "==", true),
        where("parentSkuId", "==", null)
    );
    const docs = await getDocs(q);
    const menu: MenuV2 = docs.docs.map((doc) => doc.data());
    return menu;
};

export const getMenuItems = async (app: FirebaseApp, ids?: string[]) => {
    const dbRef = collection(
        getFirestore(app),
        "menuV2"
    ) as CollectionReference<MenuItemV2>;
    const conditions = [
        ...basicQuery,
        ids ? where("skuId", "in", ids) : undefined,
    ].filter((i) => !!i) as QueryConstraint[];
    const q = query(dbRef, ...conditions);
    const docs = await getDocs(q);
    const menu: MenuV2 = docs.docs.map((doc) => doc.data());
    return menu;
};
