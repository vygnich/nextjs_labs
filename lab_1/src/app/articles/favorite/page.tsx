'use client'
import {useGetPostById} from "@/https/post"
import {Loading, Error} from "../../_components"
import {FavoriteArticle} from "./favoriteArticle"
export default function PageArticlesFavorite() {
    const post1 = useGetPostById(1)
    const post2 = useGetPostById(2)
    const post3 = useGetPostById(3)
    const posts = [post1, post2, post3]

    return (
        <div className='flex gap-2'>
            {
                posts.map((post, index) => {
                    if (post.isLoading) {
                        return <Loading key={index}/>
                    }
                    if (!post.data || post.error) {
                        return <Error key={index}/>
                    }
                    return (
                        <FavoriteArticle key={index} {...post.data}/>
                    )
                })
            }
        </div>
    )
}