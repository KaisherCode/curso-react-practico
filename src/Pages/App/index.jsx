import { useRoutes,BrowserRouter } from 'react-router-dom'
import { ShopingCartProvider } from '../../Context'
import Home from '../Home'
import MyAcount from '../MyAcount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import {Navbar} from '../../Components/Navbar'
import { CheckoutSidemenu } from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRouters = ()=>{
  let routes = useRoutes([
    {path:'/', element:<Home/>},
    {path:'/My-Acount', element:<MyAcount/>},
    {path:'/My-Order', element:<MyOrder/>},
    {path:'/My-Orders', element:<MyOrders/>},
    {path:'/Sign-In', element:<SignIn/>},
    {path:'/*', element:<NotFound/>},
  ])
  return routes
}

function App() {
  return (
    <ShopingCartProvider>
      <BrowserRouter>
        <AppRouters/>
        <Navbar/>
        <CheckoutSidemenu/>
      </BrowserRouter>
    </ShopingCartProvider>
  )
}

export default App
