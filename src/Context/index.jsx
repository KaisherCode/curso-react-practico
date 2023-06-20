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
            setCartProducts
            }}>
            {children}
        </ShopingCartContext.Provider>
    )
}
