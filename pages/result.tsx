import { doc, getDoc } from "firebase/firestore";
import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";
import NaiveNav from "../components/NaiveNav";
import { orderCollection } from "../data/firebase/client";
import { OrderItemV3 } from "../data/order";

const ResultPage: NextPage = () => {
    const router = useRouter();

    const result = useSWR(
        router.query.order_id ? ["result", router.query.order_id] : null,
        async (url, orderId) => {
            const res = await getDoc<OrderItemV3>(
                doc(orderCollection, orderId as string)
            );
            return res.data();
        }
    );

    if (result.error) {
        return <div>Error: {JSON.stringify(result.error)} </div>;
    }
    if (!result.data) {
        return <div>Loading...</div>;
    }
    const data = result.data;
    return (
        <div className="page-container">
            <NaiveNav />
            <h1>Checkout Payment Result</h1>
            <h2>Status: {data?.payment?.status}</h2>
            <h3>CheckoutSession response:</h3>
            <p>Already paid {(data?.payment?.amountReceived ?? 0) / 100} EUR</p>
            <p>Status: {data?.payment?.status}</p>
        </div>
    );
};

export default ResultPage;
