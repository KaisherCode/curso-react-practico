import Home from '../Home'
import MyAcount from '../MyAcount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

function App() {

  return (
    <>
      <div className='bg-red-100'>
        <Home/>
        <MyAcount/>
        <MyOrder/>
        <MyOrders/>
        <NotFound/>
        <SignIn/>
      </div>
    </>
  )
}

export default App
