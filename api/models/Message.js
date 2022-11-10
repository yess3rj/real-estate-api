import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    message: String,
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property'
    }
})

export default mongoose.model('Message', messageSchema)