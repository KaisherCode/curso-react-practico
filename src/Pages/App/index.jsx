import { useRoutes,BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAcount from '../MyAcount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
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
   <BrowserRouter>
      <AppRouters/>
   </BrowserRouter>
  )
}

export default App
