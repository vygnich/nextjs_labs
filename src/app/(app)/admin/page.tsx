import ProductForm from "@/components/ProductForm";
import ProductCard from "@/components/Product";
import AdminProducts from "@/components/admin/AdminProducts";

export default function AdminPage(){

    return(<>
        <ProductForm/>
        <AdminProducts/>
    </>)
}