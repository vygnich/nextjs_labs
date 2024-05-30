import ProductForm from "@/components/ProductForm";
import AdminProducts from "@/components/admin/AdminProducts";
import AdminMessages from "@/components/AdminMessages";
import {getUserAuth} from "@/modules/auth/auth";
import {Roles} from "@/modules/types";

export default async function AdminPage(){
    const session = await getUserAuth()

    return(<>
        {
            session && session.user.role == Roles.ADMIN ?
                <AdminMessages/>
            :
                <>
                <ProductForm product={null}/>
                <AdminProducts/>
                </>
        }

    </>)
}