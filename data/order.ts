export interface OrderItem {
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
    isDev: string;
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    partnerName: "taumi" | "komari" | string;
    uid: string;
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    order: {
        quantity: number;
        price: number;
        id: string;
        name: string;
    }[];

    paid: boolean;
    version: "v2";
}
