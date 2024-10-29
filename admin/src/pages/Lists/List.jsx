import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./List.css"

import { assets } from "../../assets/assets";

const List = ({url}) => {
 
 
  const [list, setList] = useState([]);
  
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error 404");
    }
  };
  const removeData =async(itemId)=>{
    try {
       const response = await axios.post(`${url}/api/food/remove`,{id:itemId})
             toast.success(response.data.message);
           
    } 
    catch(error){
            toast.error(response.data.error);
    }
   
  }
     useEffect(()=>{
      fetchList();
     })
  return (
    <div>
      <div className="Lists-container">
        <p className="text-center font-mono">The Product list</p>
      <div className="lists mt-2 ">
        <b>Image</b>
        <b>Name</b>
       <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
  
      <hr className="w-[100%] mb-2"/>
      {/* <button onClick={fetchList}>Click me</button> */}
  
        
        {
          list.map((data,index)=>{
           return (<div className="items mb-10" key={index}>
           <img  className="w-28 ml-[89px]"src= {`${url}/images/`+data.image}/>
            <p>{data.name}</p>
            <p>{data.category}</p>
            <p>$ {data.price}</p>
            <img className="w-6  flex ml-[60px]"src={assets.delete_icon} onClick={
           ()=>{removeData(data._id)}
            }/>
           </div>) 
          })
        }
     
    </div>
    </div>
  );
};

export default List;
