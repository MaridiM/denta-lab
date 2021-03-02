import { ApolloError } from 'apollo-server-express'
import { User } from '../../../models'


export const query = {
    getAllPatients: async () => {
        try {
            // Find All Patients
            return await User.find({role: 'patient'})

        } catch ({ message }) {
            throw new ApolloError(message)
        }
    }, 
}