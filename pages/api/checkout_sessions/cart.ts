// import { addDoc } from "firebase/firestore";
import { isNumber } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
// import { orderV3CollectionRef } from "../../../data/firebase-admin";
import { app } from "../../../data/firebase/clientApp";
import { getMenuItems } from "../../../data/firebase/common";
import { OrderItemV3 } from "../../../data/order";

// console.log(process.env.STRIPE_PRIVATE_KEY);
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY!, {
    apiVersion: "2020-08-27",
});

interface OrderItem {
    skuId: string;
    name: string;
    amount: number;
    quantity: number;
}
const buildOrderItemBeforePayment = (
    orders: OrderItem[],
    stripeSessionId: string,
    partnerName = "taumi"
): OrderItemV3 => {
    return {
        contactInfo: {
            wish: "",
            tel: "",
            deliverCost: 0,
            address2: "",
            deliverTime: "",
            address1: "",
            location: "",
            name: "",
            takeTime: "",
            zip: "",
            email: "",
            city: "",
            method: "",
        },
        isDev: true,
        partnerName,
        uid: "",
        orders: orders.map((o) => ({
            quantity: o.quantity,
            price: o.amount,
            id: o.skuId,
            name: o.name,
        })),
        payment: null,
        version: "v3",
    };
};

// const saveOrderBeforePayment = async (order: OrderItemV3) => {
//     await addDoc(orderV3CollectionRef, order);
// };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const query = req.query as { deliver: string };
        const deliver = query.deliver === "true";
        const body = req.body as {
            [id: string]: {
                name: string;
                amount: number;
                currency: string;
                quantity: number;
            };
        };
        const ids = Object.keys(req.body);
        const items = await getMenuItems(app, ids);
        const line_items = items
            .filter((i) => isNumber(i.price))
            .map((i) => ({
                name: i.name,
                amount: Math.round((i.price as number) * 100),
                currency: "eur",
                quantity: body[i.skuId].quantity,
            }));
        const params: Stripe.Checkout.SessionCreateParams = {
            submit_type: "pay",
            payment_method_types: ["card"],
            billing_address_collection: "auto",
            line_items,
            success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/checkout`,
            mode: "payment",
            shipping_address_collection: deliver
                ? {
                      allowed_countries: ["DE"],
                  }
                : undefined,
        };
        const checkoutSession = await stripe.checkout.sessions.create(params);
        res.status(200).json(checkoutSession);

        const firestoreOrder = buildOrderItemBeforePayment(
            line_items.map((i) => ({
                skuId: i.name,
                name: i.name,
                amount: i.amount / 100,
                quantity: i.quantity,
            })),
            checkoutSession.id
        );

        // await saveOrderBeforePayment(firestoreOrder);
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
