import { ApolloError } from 'apollo-server-express'
import { UserPersonal } from '../../../models'


export const query = {
    getAllPersonal: async () => {
        try {
            // Find All Personal
            return  await UserPersonal.find({})

        } catch ({ message }) {
            throw new ApolloError(message)
        }
    }, 
}