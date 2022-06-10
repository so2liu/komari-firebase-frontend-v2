import { NextApiRequest, NextApiResponse } from "next";
import { getMenuItems } from "../../../data/menuItem";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const id = req.query.id as string;
        console.log("id", id);
        const menuItem = await getMenuItems([id]);
        console.log("menuItem", menuItem);
        return res.status(200).json(menuItem);
    } else {
        return res.status(405).end("Method Not Allowed");
    }
}
