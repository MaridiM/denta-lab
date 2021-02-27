import { ApolloError } from 'apollo-server-express'
import { UserDentist } from '../../models'


export const mutation = {
    // Login actions
    login: (_, user, ctx) => {
        try {
            // Login by default form
            console.log(user)
            
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    loginFacebook: (_, user, ctx) => {
        try {
            // Login by google
            console.log(user)
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    loginGoogle: (_, user, ctx) => {
        try {
            // Login by Facebook
            console.log(user)
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },

    // logout
    logout: (_, { userID }, ctx) => {
        try {
            // Login by Facebook
            console.log(user)
            return "Logout from system"
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },

    // Register actions
    registerDentists: (_, user, ctx) => {
        try{
            // Register by default form

            console.log(user)
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    registerPatient: (_, user, ctx) => {
        try{
            // Register by default form

            console.log(user)
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    registerGoogle: (_, user, ctx) => {
        try{
            // Register by google

            console.log(user)
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    registerFacebook: (_, user, ctx) => {
        try{
            // Register by facebook

            console.log(user)
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },

    // Reset Password
    resetPassword: (_, { password }, ctx) => {
        try{
            // Reset password

            console.log({ password })
            return "Your password has been reset."
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    
    // Forget password
    forgetPassword: (_, { email }, ctx) => {
        try{
            // Forgot password
            
            console.log({ email })
            return "We send request to reset your password."
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    
    // Help
    help: (_, { userID, email, body }, ctx) => {
        try{
            // Help
            
            console.log({ userID, email, body })
            return "We will answer you shortly."
        } catch ({ message }) {
            throw new ApolloError(message)
        }

    
    
    }


}