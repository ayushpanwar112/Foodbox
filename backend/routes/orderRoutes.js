import { orderList, placeOrder, updateStatus, userOrder } from "../controller/orderController.js";
import express from "express"
import authMiddleware from "../middleware/auth.js"
const orderRoute = express.Router();

orderRoute.post("/place",authMiddleware,placeOrder);
orderRoute.post("/userorders",authMiddleware,userOrder);
orderRoute.get("/list",orderList);
orderRoute.post("/update",updateStatus);

export default orderRoute;