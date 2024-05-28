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
    console.log("errors", errors)
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
            className="w-full bg-gray-90classNamek:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add
            to Cart
        </button>
    );
}