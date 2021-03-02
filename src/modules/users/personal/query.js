import { ApolloError } from 'apollo-server-express'
import { User } from '../../../models'


export const query = {
    getAllPersonal: async () => {
        try {
            // Find All Personal
            return await User.find({$or: [
                {role: 'personal'}, 
                {role: 'admin'} 
            ]})

        } catch ({ message }) {
            throw new ApolloError(message)
        }
    }, 
}