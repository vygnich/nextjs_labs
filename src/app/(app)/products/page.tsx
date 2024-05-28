import {getAllProducts} from "@/modules/api/products";
import ProductCard from "@/components/Product";
import {Product} from "@/modules/schema/product";


export default async function Products() {
    const products : Product[] = await getAllProducts()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {
                products.map(product => (
                    <div key={product.id} className="rounded overflow-hidden shadow-lg flex flex-col">
                        <ProductCard {...product}/>
                    </div>
                ))
            }
            </div>
        </main>
    );
}
