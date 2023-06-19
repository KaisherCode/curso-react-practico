const Card = ()=>{
    return(
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg ">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sx m-2 px-3 py-0.5">Electronics</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsdWxhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Cellphone" />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Cellphone 📱</span>
                <span className="text-lg font-medium">$ 300.00</span>
            </p>
        </div>
    )
}
export {Card}