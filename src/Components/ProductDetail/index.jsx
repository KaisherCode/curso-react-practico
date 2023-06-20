import { TrashIcon } from '@heroicons/react/24/solid'
import './ProductDetail.css'

const ProductDetail = () => {
    return(
        <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
            <div className='flex justify-between intems-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <TrashIcon className='h-6 w-6 text-gray-500 cursor-pointer hover:text-red-700'></TrashIcon>
                </div>
            </div>
        </aside>
    )
}
export {ProductDetail}