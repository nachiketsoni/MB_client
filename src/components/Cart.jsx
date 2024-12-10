import React, { useEffect, useState } from "react";
import { checkoutApi, getCart } from "../api/userApi";

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getCart()
      .then((result) => {
        console.log(result);
        setCart(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCheckout =async ()=>{
    const checkoutUrl = await checkoutApi()
    console.log(checkoutUrl)
    window.location.href = checkoutUrl.data
  }
  return (
    <div>
      <h1>Cart</h1>
      <div className="flex flex-wrap " >
      {cart.map((item) => (
          <div class="flex m-1 justify-center items-center bg-gray-50">
            <div class="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500">
       
              <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">
                 {item?.title}
                </p>
                <div class="flex items-center">
                  <p class="text-lg font-semibold text-black cursor-auto my-3">
                  {item?.description}
                  </p>
                
                  
                </div>
              </div>
            </div>
          </div>
      ))}
      </div>

      <button onClick={handleCheckout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
