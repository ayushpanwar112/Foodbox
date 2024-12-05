import mongoose from "mongoose";
import { type } from "os";
const orderSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,requried :true},
    amount :{type:Number,required:true},
    address:{type:Object,required:true},//String
    status:{type:String,default:"Food processing"},
    date:{type:Date,default:Date.now()},
      payment:{type:Boolean,default:false}

})

const orderModel =  mongoose.model.order||mongoose.model("order",orderSchema);
export default orderModel;