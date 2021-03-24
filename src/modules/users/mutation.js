// Core
import { ApolloError } from 'apollo-server-express'
import bcrypt from 'bcryptjs'
import { GoogleAuth } from 'google-auth-library'
import jwt from 'jsonwebtoken'

// Models
import { User } from '../../models'


export const mutation = {
    // Login actions
    login: async (_, user, ctx) => {
        try {
            // Login by default form
            console.log(user)
            
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },

     // Login by social
    loginGoogle: async (_, { user }, ctx) => {
        try{
            // Register by google
            const gAuth = new GoogleAuth()
            console.log(await gAuth)


            console.log(user)
            return {_id: "jgfdgjdfk;lgd;fgdglfdgdfgdf"}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    loginFacebook: async (_, { user }, ctx) => {
        try{
            // Register by facebook

            console.log(user)
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },

    // logout
    logout: async (_, { userID }, ctx) => {
        try {
            // Login by Facebook
            console.log(user)
            return "Logout from system"
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },

    // Register actions
    registerDentists: async (_, { user }, ctx) => {
        try{
            // Register by default form
            if (user) {
                // Check email, if find to throw Error
                const checkDentistEmail = await User.findOne({$and: [ 
                    { email: user.email }, 
                    { role: 'dentist' } 
                ]})
                if ( checkDentistEmail) throw new Error('Some dentist took this email!')
                
                // Check Phone, if find to throw Error
                const checkDentistPhone = await User.findOne({$and: [
                    { phone: user.phone }, 
                    { role: 'dentist' }
                ]}) 
                if ( checkDentistPhone ) throw new Error('Some dentist use this phone!')

                // Hashed password
                const hashedPassword = await bcrypt.hash(user.password, 12) 

                // Create new dentist
                const dentist = new User({
                    fullname: user.fullname, 
                    email: user.email,
                    phone: user.phone,
                    password: hashedPassword,
                    experience: user.experience,
                    city: user.city,
                    state: user.state,
                    country: user.country,
                    clinicAddress: user.clinicAddress,
                    clinicName: user.clinicName,
                    lang: user.lang,
                    role: user.role,
                    createByRegister: true,
                    patients: []
                })

                // Add dentist to DB
                return await dentist.save()
            }
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    registerPatient: async (_, { user }, ctx) => {
        try{
            // Register by default form
            if (user) {
                // Check patient
                const checkPatient = await User
                    .findOne({$and: [
                        { email: user.email }, 
                        { createByRegister: true },
                        { role: 'patient' } 
                    ]})
                if (checkPatient) throw new Error('Some patient took this email!')
                
                // Hashed password
                const hashedPassword = await bcrypt.hash(user.password, 12)
                
                // If email, is not exist, to check user phone
                const checkPatientPhoneForUpdate = await User
                .findOne({$and: [ 
                    { phone: user.phone }, 
                    { createByRegister: false }, 
                    { role: 'patient' } 
                ]})
                if(checkPatientPhoneForUpdate) {
                    // If user phone is exist, to  update user data
                    return await User.findByIdAndUpdate(checkPatientPhone._id, {
                        fullname: user.fullname, 
                        email: user.email,
                        phone: checkPatientPhone.phone,
                        password: hashedPassword,
                        lang: user.lang,
                        role: user.role,
                        createByRegister: true,
                        createByDentist: null
                    })
                }
                
                // Check phone, if not find to create new, if find to throw Error
                const checkPatientPhone = await User.findOne({phone: user.phone})
                if (checkPatientPhone) throw new Error('Some patient use this phone!')
                

                // If user phone and email is not exist, to create new patient data
                const patient = new User({
                    fullname: user.fullname, 
                    email: user.email,
                    phone: user.phone,
                    password: hashedPassword,
                    lang: user.lang,
                    role: user.role,
                    createByRegister: true,
                    createByDentist: null
                })
                
                // Add patient to DB
                return await patient.save()
            }
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    registerPersonal: async (_, { user }, ctx) => {
        try{
            // Register by default form
            if (user) {
                // Check personal mail
                const checkPersonalEmail = await User
                    .findOne({ 
                        email: user.email, 
                        $or: [
                            { role: 'admin' }, 
                            { role: 'personal' }
                        ] 
                    })
                if (checkPersonalEmail) throw new Error('Some dentist took this email!') 
                const checkPersonalPhone = await User
                    .findOne({ 
                        phone: user.phone, 
                        $or: [
                            { role: 'admin' }, 
                            { role: 'personal' }
                        ] 
                    })
                if (checkPersonalPhone) throw new Error('Some dentist use this phone!') 
                
                // Hashed password
                const hashedPassword = await bcrypt.hash(user.password, 12) 

                // Create new personal
                const personal = new User({
                    fullname: user.fullname, 
                    email: user.email,
                    phone: user.phone,
                    password: hashedPassword,
                    lang: user.lang,
                    role: user.role,
                    createByRegister: true,
                })

                // Add new personal in DB
                return await personal.save()
            }
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
   
    // Reset Password
    resetPassword: async (_, { password }, ctx) => {
        try{
            // Reset password

            console.log({ password })
            return "Your password has been reset."
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    
    // Forget password
    forgetPassword: async (_, { email }, ctx) => {
        try{
            // Forgot password
            
            console.log({ email })
            return "We send request to reset your password."
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    
    // Help
    help: async (_, { userID, email, body }, ctx) => {
        try{
            // Help
            
            console.log({ userID, email, body })
            return "We will answer you shortly."
        } catch ({ message }) {
            throw new ApolloError(message)
        }

    
    
    }


}