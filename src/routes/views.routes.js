import express from "express";
import { ProductManager } from "../dao/managers/productManagerMongo.js";
const managerProd = new ProductManager("./src/database/products.json")

const viewsRouter = express.Router();

/*viewsRouter.get("/", async(req, res) => {
    res.render("index", {})
})*/

// -------- HOME - Handlebars
viewsRouter.get("/", async (req, res) => {

    const allProducts = await managerProd.getProducts()
    res.render("home", {
        title: "Home",
        product: allProducts
    })
})

// -------- Real Time Products - Websocket
viewsRouter.get("/realTime", async (req, res) => {
    let allProducts = await managerProd.getProducts();
    res.render("partials/realTimeProducts",{
        title: "Real Time",
        product: allProducts
    })
})

/*viewsRouter.post("/realTime", async(req, res) =>{

    try{
        const newProduct = req.body;
        res.send(await managerProd.addProduct(newProduct))
        return res.status(200).json({ message: "New product added", newProduct})
        
    } catch(error){
        return res.status(400)//.json({ message: error.message })
    }
})*/

export default viewsRouter;