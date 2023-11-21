import express from "express";
import { ProductManager } from "../dao/managers/productManagerMongo.js";
import { socketServer } from "../app.js";

const productRouter = express.Router();

const productManager = new ProductManager()

productRouter.get("/", async (req, res) => {
        const { limit } = req.query

    try{
        const products = await productManager.getProducts();
        if(limit) return res.status(200).json({message: "Limit OK", products: products.slice(0, limit)})
        return res.status(200).json({ message: "Ok", products })
    }catch(error){
        return res.status(400).json({ message: error.message })
    }
})

productRouter.get("/:pid", async(req,res) =>{
    const { pid } = req.params;

    try{
        const product = await productManager.getProductById(pid);
        return res.status(200).json({ message: "Product found", product })
    }catch(error){
        return res.status(404).json({ message: error.message })
    }
})

productRouter.post("/", async(req, res) =>{

    try{
        const data = req.body;
        const product = await productManager.addProduct(data)
        const products = await productManager.getProducts()

        socketServer.emit("newProduct", products)
        
        res.json(product.res)
        res.send(await productManager.addProduct(data))

        return res.status(200).json({ message: "New product added", product})
        
    } catch(error){
        return res.status(400).json({ message: error.message })
    }
})

productRouter.put("/:pid", async(req, res) =>{

    try{
        let update = req.body;
        res.send(await productManager.updateProduct(update))
        return res.status(200).json({ message: "Product updated", update})

    } catch(error){
        return res.status(400).json({ message: error.message })
    }
})

productRouter.delete("/:pid", async(req,res) =>{
    const { pid } = req.params;

    try{
        const product = await productManager.deleteProduct(pid)
        return res.status(200).json({ message: "Product deleted", product })
    } catch(error){
        return res.status(500).json({ message: error.message })
    }
})

export default productRouter;