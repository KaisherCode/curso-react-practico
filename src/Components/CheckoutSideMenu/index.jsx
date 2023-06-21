import { useContext } from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'
import { ShopingCartContext } from '../../Context'
import './CheckoutSideMenu.css'

const CheckoutSidemenu = () => {
    const context = useContext(ShopingCartContext)
    return(
        <aside className={` ${context.isCheckoutSideMenuOpen? 'flex':'hidden'}  CheckoutSideMenu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between intems-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <TrashIcon className='h-6 w-6 text-gray-500 cursor-pointer hover:text-red-700' onClick={()=>context.closeCheckoutSideMenu()}></TrashIcon>
                </div>
            </div>
        </aside>
    )
}
export {CheckoutSidemenu}