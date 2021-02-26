import { model, Schema } from 'mongoose'

const UserPersonalSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    avatarUrl: {
        type: String,
        default: null
    },
    facebookID: {
        type: String,
        default: null
    },
    googleID: {
        type: String,
        default: null
    },
    facebookAccessToken: {
        type: String,
        default: null
    },
    googleAccessToken: {
        type: String,
        default: null
    },
    role: {
        type: String,
        default: 'admin'
    },
    lang: {
        type: String,
        default: 'en'
    },
    resetToken: {
        type: String,
        default: null
    },
    resetTokenExp: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

export default model("UserPersonal", UserPersonalSchema)