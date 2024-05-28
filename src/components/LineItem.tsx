"use client"

import { useRouter } from 'next/navigation'
import {LineItem as LineItemType} from "@/modules/types";
import {UserRemoveCartProductAction} from "@/modules/server/userActions";
import {remove} from "@jridgewell/set-array";
import React, {Dispatch, ReactNode, SetStateAction, useEffect} from "react";
import {getUserCart} from "@/modules/api/account";
export default function LineItem({
                                     lineItem,
                                     setProducts,
                                 }: {
    lineItem: LineItemType;
    setProducts: Dispatch<SetStateAction<LineItemType[] | undefined>>;
}){

    const router = useRouter()
    const handleRemove = async () => {
        try {
            const res =  await UserRemoveCartProductAction(lineItem.id)
            const products = await getUserCart()
            if(products != undefined) setProducts(products)

        }catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                <div className="md:w-4/12 2xl:w-1/4 w-full">
                    <img src={lineItem.product.photo!} alt="Black Leather Bag"
                         className="h-full object-cenclassNamebject-cover md:block hidden"/>
                </div>
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                    <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                            {lineItem.product.title}
                        </p>

                    </div>

                    <div className="flex items-center justify-between pt-5">
                        <div className="flex itemms-center">
                            <p onClick={handleRemove} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800 dark:text-white">{lineItem.product.price/100}$</p>
                    </div>
                </div>
            </div>
        </>
    );
}