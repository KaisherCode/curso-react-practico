import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShopingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import './CheckoutSideMenu.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShopingCartContext)
    // console.log('CART: ',context.cartProducts)
    return(
        <aside className={` ${context.isCheckoutSideMenuOpen? 'flex':'hidden'}  CheckoutSideMenu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between intems-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-gray-500 cursor-pointer hover:text-red-700' onClick={()=>context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-auto'>
                {
                    context.cartProducts.map(product=>{
                        return(
                            <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images} 
                            price={product.price}
                            />
                        )} 
                    )
                }
            </div>
            
        </aside>
    )
}
export {CheckoutSideMenu}