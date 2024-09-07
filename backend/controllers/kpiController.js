import KPI from "../models/kpiModel.js"

export const getKPIS = async (req, res) => {
    try {
        const data = await KPI.find();
        res.status(200).json(data);
    } catch (error) {
        console.log("Error in getKPIS controller", error.message)
        res.status(404).json({ message: error.message })
    }
}