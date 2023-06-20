import { useState,useEffect } from "react"
import { Card } from "../../Components/Card"

function Home() {
  const [items,setItems]=useState(null)
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products") // fetch solicita los datos (productos a la API)
      .then(response=>response.json())
      .then(data=>setItems(data))
  },[])
    return (
      <>
          Home
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
              items?.map((item)=>(
                <Card key={item.id} data={item}/>
              ))
            } 
          </div>       
      </>
    )
  }
  
  export default Home
  