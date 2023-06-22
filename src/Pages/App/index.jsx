import { useRoutes,BrowserRouter } from 'react-router-dom'
import { ShoppinCartProvider } from '../../Context'
import Home from '../Home'
import MyAcount from '../MyAcount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import {Navbar} from '../../Components/Navbar'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRouters = ()=>{
  let routes = useRoutes([
    {path:'/', element:<Home/>},
    {path:'/my-acount', element:<MyAcount/>},
    {path:'/my-order', element:<MyOrder/>},
    {path:'/my-orders', element:<MyOrders/>},
    {path:'/my-orders/:id', element:<MyOrder/>},
    {path:'/sign-In', element:<SignIn/>},
    {path:'/*', element:<NotFound/>},
  ])
  return routes
}

function App() {
  return (
    <ShoppinCartProvider>
      <BrowserRouter>
        <AppRouters/>
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppinCartProvider>
  )
}

export default App
