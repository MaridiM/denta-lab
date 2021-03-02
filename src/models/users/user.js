import { model, Schema } from 'mongoose' 

const UserSchema = new Schema({
    fullname: {
        type: String,
        default: null
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
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
    clinicName: {
        type: String,
        default: null
    },
    clinicAddress: {
        type: String,
        default: null
    },
    experience: {
        type: Number,
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
    facebookSignedRequest: {
        type: String,
        default: null
    },
    googleAccessToken: {
        type: String,
        default: null
    },
    googleSignedRequest: {
        type: String,
        default: null
    },
    role: {
        type: String,
        default: null
    },
    lang: {
        type: String,
        default: 'en'
    },
    createByDentist: {
        type: String,
        default: null
    },
    createByRegister: {
        type: Boolean,
        default: false
    },
    patients: [
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
    ],
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
    },
})

export default model('User', UserSchema)