import useSWR from "swr";
import {API_URL} from "./contants"
import {Post} from "@/types"

export const useGetPosts = () => {
        const fetcher = () => fetch(`${API_URL}/posts`)
            .then(response => response.json())

        return useSWR<Post[]>(`${API_URL}/posts`, fetcher)
};


export const useGetPostById = (id: number) => {
        const fetcher = () => fetch(`${API_URL}/posts/${id}`)
            .then(response => response.json())

        return useSWR<Post>(`${API_URL}/posts/${id}`, fetcher)
};
