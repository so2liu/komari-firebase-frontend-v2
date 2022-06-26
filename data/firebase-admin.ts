import {
    credential,
    initializeApp,
    apps,
    app,
    firestore,
} from "firebase-admin";
import adminFirestore, { getFirestore } from "firebase-admin/firestore";
import {
    collection,
    CollectionReference,
    getDocs,
    query,
} from "firebase/firestore";
import { OrderItemV3 } from "./order";

const adminConfig = JSON.parse(process.env.FIREBASE_ADMINSDK_SECRET!);
const adminApp =
    apps.length > 0
        ? app
        : initializeApp({
              credential: credential.cert(adminConfig),
              databaseURL: `https://${adminConfig.project_id}.firebaseio.com`,
          });

console.log(getFirestore());

export const orderV3CollectionRef = collection(
    getFirestore() as any,
    "ordersV3"
) as CollectionReference<OrderItemV3>;

const q = query(orderV3CollectionRef);
getDocs(q).then(() => console.log("hahaha"));
