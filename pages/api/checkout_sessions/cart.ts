import { isNumber } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { getMenuItems } from "../../../data/firebase/firestore";

// console.log(process.env.STRIPE_PRIVATE_KEY);
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY!, {
    apiVersion: "2020-08-27",
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const body = req.body as {
            [id: string]: {
                name: string;
                amount: number;
                currency: string;
                quantity: number;
            };
        };
        const ids = Object.keys(req.body);
        const items = await getMenuItems(ids);
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
        };

        const checkoutSession = await stripe.checkout.sessions.create(params);
        res.status(200).json(checkoutSession);
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
