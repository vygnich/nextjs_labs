import Cart from "@/components/Cart";
import {Suspense} from "react";
import Loading from "@/app/(app)/cart/loading";

export default async function CartPage(){
    return(
        <Suspense fallback={<Loading/>}>
        <Cart/>
        </Suspense>
    )

}