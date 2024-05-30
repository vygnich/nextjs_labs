import {getMessages} from "@/modules/api/adminMessage";
import AdminMessage from "@/components/AdminMessage";

export default async function AdminMessages(){
    const messages  = await getMessages()
    if(!messages) return
    return(
        <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
            {
                messages.map(messages => (
                        <AdminMessage key={messages.id} message={messages}/>
                ))
            }
        </ul>)
}