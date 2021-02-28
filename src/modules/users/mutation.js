import { ApolloError } from 'apollo-server-express'
import bcrypt from 'bcryptjs'
// Models
import { UserDentist, UserPatient, UserPersonal } from '../../models'



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
    loginFacebook: async (_, user, ctx) => {
        try {
            // Login by google
            console.log(user)
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    loginGoogle: async (_, user, ctx) => {
        try {
            // Login by Facebook
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
                // Check email
                const checkDentistEmail = await UserDentist.findOne({ email: user.email })
                const checkDentistPhone = await UserDentist.findOne({ phone: user.phone })
                if ( checkDentistEmail || checkDentistPhone ) new Error('This email or phone is taken!')

                // Hashed password
                const hashedPassword = await bcrypt.hash(user.password, 12) 

                // Create new personal
                const dentist = new UserDentist({
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
                const checkPatient = await UserPatient.findOne({ email: user.email })
                if (checkPatient) throw new Error('This email is taken!')

                // Hashed password
                const hashedPassword = await bcrypt.hash(user.password, 12)

                // If email, is not exist, to check user phone
                const checkPatientPhone = await UserPatient.findOne({ phone: user.phone })
                if(checkPatientPhone) {
                    // If user phone is exist, to  update user data
                    return await UserPatient.findByIdAndUpdate(checkPatientPhone._id, {
                        fullname: user.fullname, 
                        email: user.email,
                        phone: checkPatientPhone.phone,
                        password: hashedPassword,
                        experience: user.experience,
                        lang: user.lang,
                        role: user.role,
                        createByRegister: true,
                        createByDentist: null
                    })
                } 
                // If user phone and email is not exist, to create new patient data
                const patient = new UserPatient({
                    fullname: user.fullname, 
                    email: user.email,
                    phone: user.phone,
                    password: hashedPassword,
                    experience: user.experience,
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
                // Check email
                const checkPersonal = await UserPersonal.findOne({ email: user.email })
                if (checkPersonal) throw new Error('This email or phone is taken!') 
                
                // Hashed password
                const hashedPassword = await bcrypt.hash(user.password, 12) 

                // Create new personal
                const personal = new UserPersonal({
                    fullname: user.fullname, 
                    email: user.email,
                    phone: user.phone,
                    password: hashedPassword,
                    experience: user.experience,
                    lang: user.lang,
                    role: user.role
                })

                // Add new personal in DB
                return await personal.save()
            }
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    // Register by social
    registerGoogle: async (_, { user }, ctx) => {
        try{
            // Register by google

            console.log(user)
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    registerFacebook: async (_, user, ctx) => {
        try{
            // Register by facebook

            console.log(user)
            return {}
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