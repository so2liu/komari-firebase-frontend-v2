import { NextApiRequest, NextApiResponse } from "next";
import { adminApp } from "../../../data/firebase-admin";
import { getMenuItems } from "../../../data/firebase/common";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const id = req.query.id as string;
        const menuItem = await getMenuItems(adminApp, [id]);
        return res.status(200).json(menuItem);
    } else {
        return res.status(405).end("Method Not Allowed");
    }
}
