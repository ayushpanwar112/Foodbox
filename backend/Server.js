 import express from "express"
 import cors from "cors"
import { ConnectDb } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRoutes from "./routes/userRoutes.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoutes.js";
import orderRoute from "./routes/orderRoutes.js";


 const app = express();
 const PORT= 4000;

 //middleware 
 app.use(express.json());
 app.use(cors());
 //connect the db
 ConnectDb();
 app.use("/api/food",foodRouter);
 app.use("/images",express.static("uploads"));
 app.use("/api/user",userRoutes);
 app.use("/api/cart",cartRouter)
 app.use("/api/order",orderRoute);

 app.get("/",(req,res)=>{
        res.send("server is working")
 })
 app.listen(PORT,()=>{
        console.log(`server is working http://localhost:${PORT} `);
 })
 //mongodb+srv://panwarkanu2001:bpPLpnfh9Y1bC5pc@foodbox.lwrn3.mongodb.net/?