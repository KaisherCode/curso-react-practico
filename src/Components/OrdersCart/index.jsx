import { TrashIcon } from '@heroicons/react/24/solid'

const OrdersCard=props=>{
    const {totalPrice,totalProducts}=props
    
    return(
        <div className='flex flex-col h-30 items-center justify-center border-solid border-2 mb-2 px-2 rounded-lg'>
            
                <span className='font-light'>Fecha: 01.02.23</span>
                <span className='font-medium'>N° Productos: {totalProducts}</span>
                <span className='font-medium'>Total: $ {totalPrice}</span>
            
        </div>
    )
}  
export {OrdersCard}