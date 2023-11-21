import mongoose from "mongoose";

const collection = 'products'

const schemaProd = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String,
    code: {
        type: String,
        unique: true
    },
    stock: Number
})

const ProductModel = mongoose.model(collection, schemaProd)

export default ProductModel