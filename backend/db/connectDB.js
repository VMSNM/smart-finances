import mongoose from "mongoose";
import KPI from "../models/kpiModel.js";
import { kpis } from '../data/data.js';
import Product from "../models/productModel.js";
import { products } from '../data/data.js';
import Transaction from "../models/transactionModel.js";
import { transactions } from '../data/data.js';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');

        /* await mongoose.connection.db.dropDatabase();
        KPI.insertMany(kpis);
        Product.insertMany(products); 
        Transaction.insertMany(transactions); */
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;