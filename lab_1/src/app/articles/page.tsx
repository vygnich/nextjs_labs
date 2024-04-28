"use client"
import useSWR from "swr"
import {Loading, Error} from "@/app/_components"
import {useGetPosts} from "@/https/post"

export default function Page() {
    const { data, error, isLoading } = useGetPosts()

    console.log("data", data)
    if (isLoading) {
        return <Loading/>
    }

    if (error || !data) {
        return <Error/>
    }


    return (
        <ol>
            {
                data.map((element, index) => (
                    <li key={element.id}>
                        {JSON.stringify(element)}
                    </li>
                ))
            }
        </ol>)
}