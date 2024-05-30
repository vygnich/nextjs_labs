"use client"
import {AdminMessageWithUser} from "@/modules/types";
import {AdminMessageAcceptMessageAction} from "@/modules/server/adminMessageAction";
import {useRouter} from "next/navigation";

export default  function AdminMessage({message}: { message: AdminMessageWithUser }){
    const router = useRouter()

    const acceptCustomer = async () => {
        try{
            const res = await AdminMessageAcceptMessageAction(message.id, message.user.id)
            if (res){
                await router.refresh()
            }
        }catch (e) {
            console.log(e)
        }
    }
    return(
        <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse flex-col md:flex-row">
            <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src="data:image/png;base64,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" alt=" Neil image"/>
         </div>
         <div className=" flex-1 ">
            <p className=" text-sm font-medium text-gray-900 truncate dark:text-white">
                {message.user.name}
            </p>
            <p className=" text-sm text-gray-500 truncate dark:text-gray-400">
                {message.user.email}
            </p>
             <p className=" text-sm text-gray-500 truncate dark:text-gray-400">
                 {message.message}
             </p>
         </div>
                <button onClick={acceptCustomer}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>
      </div>
   </li>
    )
}