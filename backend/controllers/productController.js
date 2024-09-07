import Product from "../models/productModel.js"

export const getProducts = async (req, res) => {
    try {
        const data = await Product.find();
        res.status(200).json(data);
    } catch (error) {
        console.log("Error in getProducts controller", error.message)
        res.status(404).json({ message: error.message })
    }
}