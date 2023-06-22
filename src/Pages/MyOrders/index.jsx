import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Layout} from '../../Components/Layout'
import {ShopingCartContext} from '../../Context'
import { OrdersCard } from '../../Components/OrdersCart'
function MyOrders() {
  const context = useContext(ShopingCartContext)

    console.log(context.order)
    return (
      <>
      <Layout>
        <div className='flex justify-center items-center relative mb-4 w-80'>
          <h1 className='font-medium text-xl'>My Orders</h1>
        </div>
        <div>
        {
          context.order.map((order,index)=>{
            return(
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard 
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
                />    
            </Link>
            ) 
          })
        }
        </div>
      </Layout>
      </>
    )
  }
  
  export default MyOrders
  