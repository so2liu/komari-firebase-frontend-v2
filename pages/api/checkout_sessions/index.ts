import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2020-08-27",
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const amount: number = req.body.amount;
        const params: Stripe.Checkout.SessionCreateParams = {
            submit_type: "pay",
            payment_method_types: ["card"],
            line_items: [
                {
                    name: "T-shirt",
                    amount: amount,
                    currency: "eur",
                    quantity: 1,
                },
            ],
            success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/donate-with-checkout`,
        };
        const checkoutSession = await stripe.checkout.sessions.create(params);
        res.status(200).json(checkoutSession);
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
