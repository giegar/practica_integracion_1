import express from "express";
import CartManager from "../dao/managers/cartManagerMongo.js";

const cartRouter = express.Router();

const managerCart = new CartManager();


cartRouter.post("/", async (req, res) => {
  
    try{
        const cart = await managerCart.addCarts()
        return res.status(200).json({ message: "New cart created", cart })
    }catch(error){
        return res.status(500).json({ message: error.message })
    }
})

cartRouter.post("/:cid/products/:pid", async (req, res) => {
    const { cid } = req.params;
    const { pid } = req.params;

    try{
        const cart = await managerCart.addProductsCart(cid, pid)
        return res.status(200).json({ message: "Ok", cart})
    }catch(error){
        return res.status(400).json({ message: error.message })
    }
})

cartRouter.get("/:cid", async(req,res) =>{
    const { cid } = req.params;

    try{
        const products = await managerCart.showProducts(cid);
        return res.status(200).json({ message: "Products in cart", products })
    }catch(error){
        return res.status(404).json({ message: error.message })
    }
})

export default cartRouter;