import { useContext } from "react"
import { PlusIcon,CheckIcon } from '@heroicons/react/24/solid'
import { ShopingCartContext } from "../../Context"

const Card = (data)=>{
    const context = useContext(ShopingCartContext)

    const showProduct = (productDettail)=>{
        context.closeCheckoutSideMenu()
        context.openProductDetail()
        context.setProductToShow(productDettail)
    }
    const addProductsToCart=(productData)=>{
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts,productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) =>{
        const isInCart = context.cartProducts.filter(product => product.id===id).length > 0
        if(isInCart){
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" ><CheckIcon className='h-6 w-6 text-green-500 cursor-pointer hover:text-green-700'></CheckIcon></div>
            )
        } else{
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" onClick={()=>addProductsToCart(data.data)}><PlusIcon className='h-6 w-6 text-gray-500 cursor-pointer hover:text-green-700'></PlusIcon></div>
            )
        }
    }
    return(
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sx m-2 px-3 py-0.5">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images} alt={data.data.title} onClick={()=>showProduct(data.data)} />
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">$ {data.data.price}</span>
            </p>
        </div>
    )
}
export {Card}