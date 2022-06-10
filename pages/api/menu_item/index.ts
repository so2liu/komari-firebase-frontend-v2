import { NextApiRequest, NextApiResponse } from "next";
import { getMenuItems } from "../../../data/menuItem";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        return res.status(200).json(getMenuItems());
    } else {
        return res.status(405).end("Method Not Allowed");
    }
}
