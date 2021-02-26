import { ApolloError } from 'apollo-server-express'
import { UserDentist } from '../../models'


export const mutation = {
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
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    },
    loginGoogle: (_, user, ctx) => {
        try {
            // Login by Facebook
            return {}
        } catch ({ message }) {
            throw new ApolloError(message)
        }
    }

}