import { model, Schema } from 'mongoose'

const UserDentistSchema = new Schema({
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
    clinicName: {
        type: String,
        required: true
    },
    clinicAddress: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
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
    patients: {
        type: Array,
        default: [
            {
                patientID: {
                    type: Schema.Types.ObjectId,
                    ref: 'User_Patient'
                },
                createdAt: {
                    type: Date,
                    default: Date.now
                },
                updatedAt: {
                    type: Date,
                    default: Date.now
                }
            }
        ]
    },
    role: {
        type: String,
        default: 'dentist'
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

export default model("User_Dentist", UserDentistSchema)