import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {toast} from "react-toastify"
import { assets } from "../../assets/assets";
import { data } from "framer-motion/client";

const Order = ({ url }) => {
  const [orders,setOrder] = useState([]);
  const statusHandler=async(e,orderId)=>{
           const response = await axios.post(url+"/api/order/update",{
            orderId, status:e.target.value
           })
           toast.success(response.data.message)
  }

  const fetchOrder = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrder(response.data.data);
      toast.success("order fetch")
     
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchOrder();
    console.log(orders)
  }, []);
  return <div className="order add w-full items-center flex flex-col">
    <h2 className="text-2xl font-bold mb-11 mt-9  ">Order page</h2>
     <div className="order-list flex flex-col gap-8 w-10/12 ">
      {
        orders.map((order,index)=>(
          <div key={index} className="order-item  h-32 flex  justify-between px-10 border-[1px] border-solid border-black items-center rounded-md shadow-md ">
                 <img src={assets.parcel_icon} alt="no img" className="w-20 h-16"/>
                 <div>
                  <p className="order-item-food">
                      {
                        order.items.map((item,index)=>{
                           return item.name+" x "+item.quantity
                        }).join(", ")
                      }
                  </p>
                  <p>{order.address.firstname +" "+order.address.lastname}</p>
                  <div className="order-item-address">
                    <p>{order.address.street+","}</p>
                    <p>{order.address.city+","+order.address.state+","+order.address.zipcode}</p>
                  </div>
                  <p>{order.address.phone}</p>
                 </div>
                 <p>items:{order.items.length}</p>
                 <p>{`₹: ${order.amount}`}</p>
                 <select onChange={(e)=>statusHandler(e,order._id)} value={order.status}>
                  <option value="Food_processing">
                     Food Processing
                  </option>
                  <option value="out_of_order">Out of order</option>
                  <option value="delivered">Delivered</option>
                 </select>
          </div>
        ))
      }

    
     </div>
         


  </div>;
};

export default Order;
