import {checkAuth, getUserAuth} from "@/modules/auth/auth";
import {getUser} from "@/modules/api/account";
import {getProductByUser} from "@/modules/api/products";
import ProductCard from "@/components/Product";

export default async function AdminProducts(){
    const user  = await getUser()
    if(!user) return
    const products = await  getProductByUser(user.id)
    return(<div className="flex min-h-screen  justify-between py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {
                products.map(product => (
                    <div key={product.id} className="rounded overflow-hidden shadow-lg flex flex-col">
                        <ProductCard {...product} adminMode={true}/>
                    </div>
                ))
            }
        </div>
    </div>)
}