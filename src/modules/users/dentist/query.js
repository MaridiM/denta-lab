import { ApolloError } from 'apollo-server-express'
import { User } from '../../../models'


export const query = {
    getAllDentists: async () => {
        try {
            // Find All Patients
            return await User.find({role: 'dentist'})

        } catch ({ message }) {
            throw new ApolloError(message)
        }
    }, 
}