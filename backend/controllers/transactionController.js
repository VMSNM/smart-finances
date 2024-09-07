import Transaction from "../models/transactionModel.js"

export const getTransactions = async (req, res) => {
    try {
        const data = await Transaction.find().limit(50).sort({ createdAt: -1 });
        res.status(200).json(data);
    } catch (error) {
        console.log("Error in getTransactions controller", error.message)
        res.status(404).json({ message: error.message })
    }
}