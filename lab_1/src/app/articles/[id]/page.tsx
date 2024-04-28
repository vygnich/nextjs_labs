import {API_URL} from "@/https/contants"
import {Comment} from "./Component"

interface Params {
    params: {
        id: number
    }
}



export default async function ArticlesIdPage({params}: Params) {

    const post = await fetch(`${API_URL}/posts/${params.id}`).then((data) => data.json())

    const comment = await fetch(`${API_URL}/posts/${params.id}/comments`).then((data) => data.json())

    return (
        <>
            <div>
                {post?.title}
            </div>
            <div>
                ID: {post?.id}
            </div>
            <div>
                UserID: {post?.userId}
            </div>
            <div className='flex flex-col gap-2 px-2'>
                {
                    comment.map((element: any) => (
                        <Comment key={element.id} {...element}/>
                    ))
                }
            </div>
        </>
    )
}