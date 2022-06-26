import { NextApiRequest, NextApiResponse } from "next";
import { adminApp } from "../../../data/firebase-admin";
import { getMenuItems } from "../../../data/firebase/common";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        return res.status(200).json(getMenuItems(adminApp));
    } else {
        return res.status(405).end("Method Not Allowed");
    }
}
