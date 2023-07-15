import { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppinCartContext } from '../../Context'

const ShoppingCart = () => {
  const context = useContext(ShoppinCartContext)
  return (
    <div className='relative flex gap-0.5 items-center' onClick={() => context.openCheckoutSideMenu()}>
      <ShoppingCartIcon className='w-6 h-6 fill-none stroke-black cursor-pointer' />
      <div className='absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-teal-200 w-4 h-4  text-xs text-black'>
        {context.cartProducts.length}
      </div>
    </div>
  )
}

export { ShoppingCart }