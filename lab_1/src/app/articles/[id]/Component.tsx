import type { Comment } from '@/types'
interface Props extends Comment {}
export function Comment({name, email, body}: Props) {
    return (
        <div className="p-2 rounded-md bg-gray-200">
            <div>
                Name: {name}
            </div>
            <div>
                Email: {email}
            </div>
            <div>
                {body}
            </div>
        </div>
    )
}