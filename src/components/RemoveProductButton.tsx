"use client"

import {Product} from "@/modules/schema/product";
import {ProductDeleteAction} from "@/modules/server/productAction";
import {useRouter} from "next/navigation";

export default function RemoveProductButton(product: Product){
    const router = useRouter()

    const RemoveHandle = async  ()=>{

        try {
            const res = await ProductDeleteAction(product.id);
            console.log("res", res)
            if(res){
                await router.refresh()
            }

        }catch (e) {
            console.log(e)
        }
    }
    return (
        <div
        onClick={()=>RemoveHandle()} data-modal-target="default-modal" data-modal-toggle="default-modal"
        className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
        Remove
    </div>)
}