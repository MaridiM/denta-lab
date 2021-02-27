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

}