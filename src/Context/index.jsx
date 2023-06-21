import { createContext,useState } from "react"

export const ShopingCartContext = createContext()

export const ShopingCartProvider = ({children}) => {
    // Shopping Cart . Increment Quantity
    const [count,setCount] = useState(0)
    // Prodcut Detail . Open/Close
    const [isProductDetailOpen,setIsProductDetailOpen]=useState(false)
    const openProductDetail = ()=>setIsProductDetailOpen(true)
    const closeProductDetail = ()=>setIsProductDetailOpen(false)
    // Product Detail . Show product
    const [productToShow,setProductToShow] = useState({})
    // Shopping Cart . Add products to cart
    const [cartProducts,setCartProducts]=useState([])
    // Checkout Side Menu . Open/Close
    const [isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen]=useState(false)
    const openCheckoutSideMenu = ()=>setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = ()=>setIsCheckoutSideMenuOpen(false)
    return(
        <ShopingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
            }}>
            {children}
        </ShopingCartContext.Provider>
    )
}
