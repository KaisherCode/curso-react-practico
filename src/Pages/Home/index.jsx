import { useContext } from 'react'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoppinCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppinCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0){
        return(
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item}/>
          ))
        )
      } else{
        return(
          <div>Sorry, we did not find results.</div>
        )
      }
    } 

    return (
      <>
          <div className='flex justify-center items-center relative mb-4 w-80'>
            <h1 className='font-medium text-xl'>Exclusive Products</h1>
          </div>
          <input
           type='text' 
           placeholder='Search a product' 
           className='rounded-lg border border-black w-80 p-4 mb-6' 
           onChange={(event)=>context.setSearchByTitle(event.target.value)}
           />
          <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {renderView()} 
          </div>
          <ProductDetail/>      
      </>
    )
  }
  
  export default Home
  