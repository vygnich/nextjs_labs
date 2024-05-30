"use client"
import {useValidatedForm} from "@/modules/hooks/FormValidation";
import {insertProductParams, Product} from "@/modules/schema/product";
import {ProductInsertAction, ProductUpdateAction} from "@/modules/server/productAction";
import { useRouter } from 'next/navigation'
import {UserInsetCartProductAction} from "@/modules/server/userActions";

export default function ATCButton(product: Product){
    const {
        errors, hasErrors, setErrors, handleChange,
    } = useValidatedForm<Product>(insertProductParams);
    const router = useRouter()
    const handleATC = async () => {
        try {

            const res =  await UserInsetCartProductAction(product.id, 1)
            if(res){
                await router.push("/cart")
            }

        }catch (e) {
            console.log(e)
        }
    }
    return (
        <button onClick={handleATC}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save
            to Cart
        </button>
    );
}