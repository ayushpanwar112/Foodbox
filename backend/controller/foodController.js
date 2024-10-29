import foodModel from "../modles/foodModel.js";
import fs from "fs";

//add food item 
const addFood= async(req,res)=>{
   let image_filename = `${req.file.filename}`
   const  food = new foodModel({
   name:req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category
   });

   try {
           await food.save();
           res.json({success:true,message:"food add"})
   } catch (error) {
      console.log(error)
      res.json({success:false,message:"Error"})
   }
}
//show foodlist 
const listFood =async(req,res)=>{
   try {
       const foods = await foodModel.find({})
       res.json({success:true,data:foods})
   } catch (error) {
       console.log("failed to fetch data from DB")
   }

}
//remove fooditem
const removeFood =async(req,res)=>{
      try{
         const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{

        });
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"food deleted"});
      }  
      catch(error)
      {
         res.json({success:false,message:"failed to delete"});
      }
}
export {addFood,listFood,removeFood}