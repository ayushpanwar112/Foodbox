import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

  const [image,setImage] = useState(false);
  const [data,setDate] =useState({
    name:"",
    description:"",
    category:"",
    price:""
  })
  const onChangeHandler=(e)=>{
      const name = e.target.name;
      const value =e.target.value;
      setDate(data=>(({...data,[name]:value})))
    
  }
  const onSubmitHandler= async(e)=>{
     
       e.preventDefault();
       const formData = new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("category",data.category);
        formData.append("price",data.price);
        formData.append("image",image)
          const response =  await axios.post(`${url}/api/food/add`,formData);
          if(response.data.success)
          {
             setDate({
              name:"",
              description:"",
              category:"",
              price:""
             })
             setImage(false)
                    toast.success(response.data.message);
          }
           else {
            toast.error(response.data.message);
           }
         
  }
  return (
    <div className='w-[100%] px-3'>
       <form className='flex flex-col gap-2 ' onSubmit={onSubmitHandler}>
        <div className="add-img-upload">
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt='' className='w-32 h-23 object-fill' />

          </label>
           <input type='file' onChange={(e)=>{setImage(e.target.files[0])}}id='image' hidden required/>
         

        </div>
           <div className="product-details flex flex-col justify-center gap-2 ">
        
               <input type='text' name= "name" onChange={onChangeHandler } value={data.name}placeholder='Product name' className=' border-l-neutral-800 border-[1px] p-2'  required/>
              <textarea  name="description" rows="6"placeholder='Product Description 'onChange={onChangeHandler } value={data.description} className=' border-l-neutral-800 border-[1px] p-2' required/>  
                <div className='flex gap-2'>
              <input type="number" name='price' onChange={onChangeHandler} value={data.price} placeholder='Add Price'className=' border-l-neutral-800 px-2 border-[1px]' required/>
              <select
  name="category"
  className="border border-neutral-800 rounded-md px-3 py-2 text-gray-700 bg-gray-50 cursor-pointer transition-all duration-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300" onChange={onChangeHandler}

required> <option value="category">Category</option>
  <option value="salad">Salad</option>
  <option value="Rolls">Rolls</option>
  <option value="Deserts">Desserts</option>
  <option value="Sandwich">Sandwich</option>
  <option value="Cake">Cake</option>
  <option value="Pure Veg">Pure Veg</option>
  <option value="Pasta">Pasta</option>
  <option value="Noodles">Noodles</option>
</select>
            </div>
           

             </div>
             <button className=" bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 hover:scale-105  hover:bg-green-700 transition duration-300 ease-in-out w-32 ">  Add
             </button>
       </form>
    </div>
  )
}

export default Add
