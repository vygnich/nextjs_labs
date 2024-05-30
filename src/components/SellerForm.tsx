"use client"
import {useValidatedForm} from "@/modules/hooks/FormValidation";
import {ProductInsertAction, ProductUpdateAction} from "@/modules/server/productAction";
import { useRouter } from 'next/navigation'
import {AuthSession} from "@/modules/types";
import {AdminMessage, insertAdminMessageSchema} from "@/modules/schema/adminMessage"
import {AdminMessageInsertAction} from "@/modules/server/adminMessageAction";

const inputStyle = "text-gray-900 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600"

const errorInputStyle = "text-red-900 border-red-300 dark:border-red-600 dark:focus:border-red-500 focus:border-red-600"
export default function SellerForm({session}: AuthSession){
    const {
        errors, hasErrors, setErrors, handleChange,
    } = useValidatedForm<AdminMessage>(insertAdminMessageSchema);
    const router = useRouter()
    const handleSubmit = async (data: FormData) => {
        const payload = Object.fromEntries(data.entries());
        const messageParsed = await insertAdminMessageSchema.safeParseAsync({ ...payload });
        if (!messageParsed.success) {
            return;
        }
        const values = messageParsed.data;

        try {
            const formData = { ...values };
            const res = await AdminMessageInsertAction(formData)
            if(res){
                await router.refresh()
            }

        }catch (e) {
            console.log(e)
        }
    }
    return (


        <form onChange={handleChange} action={handleSubmit} className="space-y-8 mt-20">
            <h2 className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Become a seller
            </h2>

            <div className="relative z-0 w-full mb-5 group">
                <textarea name="message" id="floating_email"
                       className={`${errors?.message ? errorInputStyle : inputStyle} block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none dark:text-white  focus:outline-none focus:ring-0  peer`}
                          placeholder=""></textarea>
                </div>
            <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
            </button>
        </form>

    );
}