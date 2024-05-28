"use client"
import React, {useEffect, useState} from 'react';
import {getUserCart} from "@/modules/api/account";
import {LineItem as LineItemType} from "@/modules/types"
import LineItem from "@/components/LineItem"


export default  function Cart() {
    let [products, setProducts] = useState<LineItemType[]>()
    const getProduct = async () =>{
        const products = await getUserCart()
        if(products != undefined) setProducts(products)
    }
    useEffect(  ()=> {
        getProduct()
    }, [])
    if(!products) return
    return (
        <div>

    <h2>Your Cart</h2>
            {products.map((lineItem: LineItemType) =>  (<LineItem key={lineItem.id} lineItem={lineItem} setProducts={setProducts}/>))}
            <div
                className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">

                <div>

                    <button
                        className="text-base leadingclassName w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

