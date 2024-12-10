import React, { useEffect, useState } from 'react'
import { myOrders } from '../api/userApi'

const Orders = () => {
    const [orders, setorders] = useState([])
    useEffect(() => {
      
        myOrders().then((res) => {
            setorders(res.data)
        })
   
    }, [])
    
  return (
    <div>
        <h1>Orders</h1>
        <div className="flex flex-wrap " >
      {orders.map((item) => (
          <div class="flex m-1 justify-center items-center bg-gray-50">
            <div class="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500">
       
              <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">
                 {item?.title}
                </p>
                <div class="flex items-center">
                  <p class="text-lg font-semibold text-black cursor-auto my-3">
                  ${item?.description}
                  </p>
                
                 
                </div>
              </div>
            </div>
          </div>
      ))}
      </div>
    </div>
  )
}

export default Orders