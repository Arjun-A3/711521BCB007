const mongoose = require("mongoose");

mongoose.connect("MONGO_URL_HERE");

const proSchema = mongoose.Schema({
    valn : Number,
    id : Number,
    productName : String,
    price : Number,
    rating : Number,
    discount : Number,
    availability : Number 
})

export const Products = await mongoose.model("products",proSchema);

