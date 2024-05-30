
'use client'
import {Product} from "@/modules/schema/product";
import Link from "next/link";
import Modal from "@/components/Modal"
import ProductForm from "@/components/ProductForm";
import {useState} from "react";
import RemoveProductButton from "@/components/RemoveProductButton";
interface ProductCardProps extends Product {
    adminMode?: boolean;
}
export default function ProductCard({ adminMode = false, ...product }: ProductCardProps){
    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false);
    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/products/${product.id}`}>
                <img className=" rounded-t-lg w-full h-40 object-cover" src={product.photo!} alt=""/>
            </Link>
            <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {product.title}
                    </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {product.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {product.userId}
                </p>
                <Link href={`/products/${product.id}`}
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {product.price / 100 + "$"}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
                {
                    adminMode ?
                        <>
                            <div className={"flex gap-1 mt-10"}>
                                <button onClick={()=>setOpen(true)} data-modal-target="default-modal" data-modal-toggle="default-modal"
                                        className="w-1/2 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        type="button">
                                    Update
                                </button>
                                <div className={"w-1/2"}><RemoveProductButton {...product}/></div>
                            </div>
                        <Modal open={open} setOpen={setOpen} title={"Update product"}>
                            <ProductForm product={product}/>
                        </Modal>
                        </>
                        :""
                }
            </div>
        </div>
    )
}