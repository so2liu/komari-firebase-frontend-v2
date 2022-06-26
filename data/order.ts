type PaymentIndentStatus =
    | "canceled"
    | "processing"
    | "requires_action"
    | "requires_capture"
    | "requires_confirmation"
    | "requires_payment_method"
    | "succeeded";

export interface OrderItemV3 {
    contactInfo: {
        wish: string;
        tel: string;
        deliverCost: number;
        address2: string;
        deliverTime: string;
        address1: string;
        location: string;
        name: string;
        takeTime: string;
        zip: string;
        email: string;
        city: string;
        method: string;
    };
    isDev: boolean;
    partnerName: "taumi" | "komari" | string;
    uid: string;
    orders: {
        quantity: number;
        price: number;
        id: string;
        name: string;
    }[];
    stripe: {
        successRedirectPrefix: string;
        cancelRedirect: string;
        sessionId: string;
    } | null;
    payment: {
        method: "stripe";
        status: PaymentIndentStatus;
        amountReceived: number;
    } | null;
    version: "v3";
}
