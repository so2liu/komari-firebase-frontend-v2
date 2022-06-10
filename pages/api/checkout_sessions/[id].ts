import { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";
const sk = process.env.STRIPE_PRIVATE_KEY;
console.log("sk   ", sk);
const stripe = new Stripe(sk!, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: "2020-08-27",
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id: string = req.query.id as string;
    try {
        if (!id.startsWith("cs_")) {
            throw Error("Incorrect CheckoutSession ID.");
        }
        const checkout_session: Stripe.Checkout.Session =
            await stripe.checkout.sessions.retrieve(id, {
                expand: ["payment_intent"],
            });

        res.status(200).json(checkout_session);
    } catch (err) {
        const errorMessage =
            err instanceof Error ? err.message : "Internal server error";
        res.status(500).json({ statusCode: 500, message: errorMessage });
    }
}
