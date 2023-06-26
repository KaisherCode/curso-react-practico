import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppinCartContext } from "../../Context"

const Navbar = () => {
    const context = useContext(ShoppinCartContext)
    const activeStyle = 'underline underline-offset-4'

    // Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut
    // Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
   // Has an account
    const noAccountInLocalStorage = parsedAccount? Object.keys(parsedAccount).length ===0:true
    const noAccountInLocalState = context.account? Object.keys(context.account).length===0:true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignout = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out',stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () =>{
    if (hasUserAnAccount && !isUserSignOut){
        return(
            <>
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
                    <NavLink to='/sign-in' className={({isActive})=>isActive? activeStyle:undefined}
                    onClick={()=>handleSignout()}>
                        Sign out
                    </NavLink>
                </li>
            </>
        )
    }else{
        return(
            <li>
            <NavLink to='/sign-in' className={({isActive})=>isActive? activeStyle:undefined}
                onClick={()=>handleSignout()}>
                Sign out
            </NavLink>
        </li>
        )
    }
}
    return(
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to={`${isUserSignOut? '/sign-in' : '/'}`}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    onClick={()=>context.setSearchByCategory()}
                    className={({isActive})=>isActive? activeStyle:undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    onClick={()=>context.setSearchByCategory('clothes')}
                    className={({isActive})=>isActive? activeStyle:undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    onClick={()=>context.setSearchByCategory('electronics')} 
                    className={({isActive})=>isActive? activeStyle:undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures' 
                    onClick={()=>context.setSearchByCategory('furnitures')}
                    className={({isActive})=>isActive? activeStyle:undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                    onClick={()=>context.setSearchByCategory('toys')} 
                    className={({isActive})=>isActive? activeStyle:undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others' 
                    onClick={()=>context.setSearchByCategory('others')}
                    className={({isActive})=>isActive? activeStyle:undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                {renderView()}
                <li className="flex items-center">
                    <ShoppingCartIcon className="w-6 h-6 text-gray-500 hover:text-gray-400" onClick={()=>context.openCheckoutSideMenu(true)}></ShoppingCartIcon> 
                    <div className="text-red-700 font-medium">{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar}