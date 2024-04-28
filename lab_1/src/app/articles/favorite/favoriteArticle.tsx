import {Post} from "@/types";

interface Props extends Post{}

export function FavoriteArticle({id, userId, title}: Props) {
    return (
        <div className="p-5 bg-gray-300 rounded-md">
            <div>
                {title}
            </div>
            <div>
                ID: {id}
            </div>
            <div>
                UserID: {userId}
            </div>
        </div>
    )
}