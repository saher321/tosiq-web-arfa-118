import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const DBConnection = async () => {
    try {
        console.log("DB is connecting...")
        const response = await mongoose.connect(process.env.MONGODB_LIVE)
        if (response){
            console.log("DB is connected:", response.connection.name)
        } else {
            console.log("Failed to connect database")
        }
    } catch (error) {
        console.log("Failed to connect database, Internal server error")
        throw new Error(error)
    }
}