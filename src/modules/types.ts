import {Product} from "@/modules/schema/product";

export type AuthSession = {
    session: {
        user: {
            id: string;
            name?: string;
            email?: string;
            image?: string
        };
    } | null;
};


export interface LineItem {
    product: Product
    count: number;
    id: string;
}