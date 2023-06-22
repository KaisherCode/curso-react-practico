import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppinCartContext } from "../../Context"

const Navbar = () => {
    const context = useContext(ShoppinCartContext)
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className={({isActive})=>isActive? activeStyle:undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' className={({isActive})=>isActive? activeStyle:undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' className={({isActive})=>isActive? activeStyle:undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures' className={({isActive})=>isActive? activeStyle:undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' className={({isActive})=>isActive? activeStyle:undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others' className={({isActive})=>isActive? activeStyle:undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    team@hynkor.com
                </li>
                <li>
                    <NavLink to='/my-orders' className={({isActive})=>isActive? activeStyle:undefined}>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-acount' className={({isActive})=>isActive? activeStyle:undefined}>
                        My Acount
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={({isActive})=>isActive? activeStyle:undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center">
                    <ShoppingCartIcon className="w-6 h-6 text-gray-500 hover:text-gray-400" ></ShoppingCartIcon> 
                    <div className="text-red-700 font-medium">{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar}