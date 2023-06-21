import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Layout} from '../../Components/Layout'
import {ShopingCartContext} from '../../Context'
import { OrdersCard } from '../../Components/OrdersCart'
function MyOrders() {
  const context = useContext(ShopingCartContext)


    return (
      <>
      <Layout>
        <div className='flex w-80 justify-center items-center relative'>
          <h1>My Orders</h1>
        </div>
        {
          context.order.map((order,index)=>{
            <Link key={index} to={`/my-orders/${order.id}`}>
                <OrdersCard 
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
                />    
            </Link>
          })
        }
      </Layout>
      </>
    )
  }
  
  export default MyOrders
  