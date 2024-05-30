import {Product} from "@/modules/schema/product";
import {User} from "@/modules/schema/account";
import {InsertAdminMessageParams} from "@/modules/schema/adminMessage";

export type AuthSession = {
    session: {
        user: User;
    } | null;
};


export interface LineItem {
    product: Product
    count: number;
    id: string;
}


export enum Roles {
    USER = "USER",
    ADMIN = "ADMIN",
    SELLER = "SELLER"
}

export enum RoleStatus  {
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    INPROGRESS = "INPROGRESS"
}

export interface AdminMessageWithUser extends InsertAdminMessageParams{
    user: User,
    id: string
}