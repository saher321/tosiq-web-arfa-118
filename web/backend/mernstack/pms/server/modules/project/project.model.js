import mongoose, { model } from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    deadLine: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["processing", "pending", "cancelled", "completed"],
        default: "pending"
    },
    notes: {
        type: String,
        default: null
    },
}, { timestamps: true })


const Project = mongoose.model("Project", projectSchema)

export default Project