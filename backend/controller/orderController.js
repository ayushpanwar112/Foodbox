import orderModel from "../modles/orderModel.js"
import userModel from "../modles/userModel.js";


const placeOrder=async(req,res)=>{
  try {
     const newModel = new orderModel({
    userId:req.body.userId,
    items:req.body.items,
    amount:req.body.amount,
    address:req.body.address

   })
   await newModel.save();
   await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
   res.json({success:true,message:"place successfully"})
  } catch (error) {
       console.log(error);
       res.json({success:false,message:"Internal server error"});
  }
  
   
}
    const userOrder=async(req,res)=>{
           try {
             const orders = await orderModel.find({userId:req.body.userId});
             res.json({success:true,data:orders})
           } catch (error) {
                 res.json({success:false,message:"error"})
           }
    }

 const orderList=async(req,res)=>{
  try {
    const order = await orderModel.find({});
      res.json({success:true,data:order})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"error"});
  }
   
 }
 const updateStatus=async(req,res)=>{
try {
    await orderModel.findByIdAndUpdate({_id:req.body.orderId},{status:req.body.status},{ new: true } )
    res.json({success:true,message:`status change`})
} catch (error) {
  console.log(error)
        res.json({success:false,message:"failed to change status",error});
}
 }

export  {placeOrder,userOrder,orderList,updateStatus}
