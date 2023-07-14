import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppinCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import './CheckoutSideMenu.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppinCartContext)

    const handleDelete=(id) =>{
        const filterProducts = context.cartProducts.filter(product=>product.id != id)
        context.setCartProducts(filterProducts)
    }

    const handleCheckout = ()=>{
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts:context.cartProducts.length,
            totalPrice:totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order,orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)  
        context.closeCheckoutSideMenu()      
    }
    return(
        <aside className={` ${context.isCheckoutSideMenuOpen? 'flex':'hidden'}  CheckoutSideMenu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between intems-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-gray-500 cursor-pointer hover:text-red-700' onClick={()=>context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-auto flex-1'>
                {
                    context.cartProducts.map(product=>{
                        return(
                            <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images} 
                            price={product.price}
                            handleDelete={handleDelete}
                            />
                        )} 
                    )
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='font-ligth mb-2'>Order Summary</p>
                <p className='flex justify-between items-center mb-4 bg-slate-200 rounded-lg p-2'>
                    <span className='font-bold'>Total: </span>
                    <span className='font-medium text-2xl'>$ {totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='bg-teal-600 hover:bg-teal-500 opacity-40 hover:shadow-lg py-3 text-white w-full rounded-lg font-bold' onClick={()=>handleCheckout()}>Checkout</button>
                </Link>
                <div className='flex justify-center mt-2 underline'><a href='/'>Continue Shoping</a></div>
            </div>
            
        </aside>
    )
}
export {CheckoutSideMenu}