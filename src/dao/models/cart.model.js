import mongoose from "mongoose";

const collection = "carts"

const schema = new mongoose.Schema({
    products: {
        type:[
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "productos"
                },
                quantity: Number
            }
        ],
        default: []
    }
})

const CartModel = mongoose.model(collection, schema);

export default CartModel