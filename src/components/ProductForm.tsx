"use client"
import {useValidatedForm} from "@/modules/hooks/FormValidation";
import {insertProductParams, Product} from "@/modules/schema/product";
import {ProductInsertAction, ProductUpdateAction} from "@/modules/server/productAction";
import { useRouter } from 'next/navigation'

const inputStyle = "text-gray-900 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600"

const errorInputStyle = "text-red-900 border-red-300 dark:border-red-600 dark:focus:border-red-500 focus:border-red-600"
export default function ProductForm(product: Product | undefined = undefined){
    const {
        errors, hasErrors, setErrors, handleChange,
    } = useValidatedForm<Product>(insertProductParams);
    console.log("errors", errors)
    const router = useRouter()
    const handleSubmit = async (data: FormData) => {
        const payload = Object.fromEntries(data.entries());
        const productParsed = await insertProductParams.safeParseAsync({ ...payload });
        if (!productParsed.success) {
            return;
        }
        const values = productParsed.data;
        const pendingProduct: Product = {
            id:  '',
            ...values,
        };
        try {
            const formData = { ...values }

            const res = Object?.entries(product!).length === 0 || !product ? await ProductInsertAction(formData): await ProductUpdateAction(product.id || "" , formData)
            const productUrl = "products/" + res?.id
            if(res){
                await router.push(productUrl)
            }

        }catch (e) {
            console.log(e)
        }
    }
    return (


        <form onChange={handleChange} action={handleSubmit} className="space-y-8">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="title" id="floating_email"
                       className={`${errors?.title ? errorInputStyle : inputStyle} block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none dark:text-white  focus:outline-none focus:ring-0  peer`}
                       placeholder="" defaultValue={product?.title}/>
                <label htmlFor="floating_email"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">TITLE</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="description" id="floating_password"
                       className={`${errors?.description ? errorInputStyle : inputStyle} block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none dark:text-white  focus:outline-none focus:ring-0  peer`}
                       placeholder="" defaultValue={product?.description!}/>
                <label htmlFor="floating_password"

                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DESCRIPTION</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="price" id="floating_repeat_password"
                       className={`${errors?.price ? errorInputStyle : inputStyle} block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none dark:text-white  focus:outline-none focus:ring-0  peer`}
                       placeholder="" defaultValue={product?.price}/>
                <label htmlFor="floating_repeat_password"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PRICE</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="photo" id="floating_repeat_password"
                       className={`${errors?.photo ? errorInputStyle : inputStyle} block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none dark:text-white  focus:outline-none focus:ring-0  peer`}
                       placeholder="" defaultValue={product?.photo!}/>
                <label htmlFor="floating_repeat_password"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PHOTO</label>
            </div>

            <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
            </button>
        </form>

    );
}