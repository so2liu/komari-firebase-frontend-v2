import { NextApiRequest, NextApiResponse } from "next";
import { getMenuItems } from "../../../data/firebase/firestore";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const id = req.query.id as string;
        const menuItem = await getMenuItems([id]);
        return res.status(200).json(menuItem);
    } else {
        return res.status(405).end("Method Not Allowed");
    }
}
