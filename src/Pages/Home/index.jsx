import { useContext } from 'react'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoppinCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppinCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div className='text-2xl w-96 text-teal-700 '>Sorry, we did not find results.</div>
      )
    }
  }

  return (
    <>
      <div className='flex justify-center items-center relative mb-4 w-80'>
        <h1 className='font-bold  text-2xl'>Exclusive Products</h1>
      </div>
      <input
        type='text'
        placeholder='Search in shoppi.com'
        className='rounded-lg border border-black lg:w-96 p-4 mb-6 md:w-80'
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className='grid lg:gap-4 lg:grid-cols-4  lg:w-full lg:max-w-screen-lg sm:grid-cols-1 sm:mb-4 md:grid-cols-3 md:gap-2 '>
        {renderView()}
      </div>
      <ProductDetail />
    </>
  )
}

export default Home
