'use client';

import {AuthSession} from "@/modules/types";
import {useValidatedForm} from "@/modules/hooks/FormValidation";
import {insertUserParams, updateUserParams, User} from "@/modules/schema/account";
import {UserUpdateAction} from "@/modules/server/userActions";


export function ProfileSettingsForm({session}: AuthSession) {
    const {
        errors, hasErrors, setErrors, handleChange,
    } = useValidatedForm<User>(insertUserParams);
    const handleSubmit = async (data: FormData) => {
        const payload = Object.fromEntries(data.entries());
        const productParsed = await insertUserParams.safeParseAsync({ ...payload });
        const values = productParsed.data;
        if (!values) return
        try {
            const formData = { ...values, id: session?.user.id!}
            await UserUpdateAction(formData)

        }catch (e) {
            console.log(e)
        }
    }
    return (

            <form onChange={handleChange} action={handleSubmit} className="space-y-8 mt-10">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" id="floating_email"
                           className={` block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none dark:text-white  focus:outline-none focus:ring-0  peer`}
                           placeholder="" defaultValue={session?.user.name!}/>
                    <label htmlFor="floating_email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NAME</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="description" id="floating_password"
                           className={ `block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none dark:text-white  focus:outline-none focus:ring-0  peer`}
                           placeholder="" defaultValue={session?.user.image!}/>
                    <label htmlFor="floating_password"

                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">IMAGE</label>
                </div>


                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save
                </button>
            </form>
    );
}