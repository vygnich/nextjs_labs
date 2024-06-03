import Cart from "@/components/Cart";
import {Suspense} from "react";
import Loading from "@/app/(app)/cart/loading";
import getMemes from "@/modules/memeApi";
import {redirect} from "next/navigation";

export default async function CartPage(){
    const memes  = await getMemes()
    console.log(memes)


    if(!memes) redirect("/")
    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {
                    memes.map((meme, index) => (
                        <div key={index} className="rounded overflow-hidden shadow-lg flex flex-col">
                            <img className="w-full h-full objclassNameover object-contain"
                                 src={meme.preview.at(-1)}
                                 alt="Meme Image"/>
                        </div>))
                }
            </div>
        </main>)

}