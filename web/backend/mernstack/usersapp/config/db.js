import mongoose from "mongoose";

export const DBConnection = async () => {
    try {
        const str = "mongodb+srv://pnymeet_db_user:bqEEYyQRzWOiotwD@cluster0.c6nfeck.mongodb.net/pms_b118?appName=Cluster0"
        const response = await mongoose.connect(str)
        if (response){
            console.log("Db is connected:", response.connection.name)
        } else {
            console.log("Failed to connect database")
        }
    } catch (error) {
        console.log("Failed to connect database, Internal server error")
        throw new Error(error)
    }
}