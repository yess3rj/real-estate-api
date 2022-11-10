import mongoose, { mongo } from "mongoose";

const propertySchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    streetNumber : {
        type: Number,
        required: true
    },
    suiteNumber: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    suburb: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        enum: ['apartment', 'house', 'office', 'warehouse'],
        required: true
    },
    offerType: {
        type: String,
        enum: ['renta', 'venta'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    photos: {
        type: String,
        required: true
    }
})

export default mongoose.model('Property', propertySchema)