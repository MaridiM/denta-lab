import { model, Schema } from 'mongoose'

const MessageHelpSchema = new Schema({
    userID: {
        type: String,
        default: null
    },
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

export default model("MessageHelp", MessageHelpSchema)