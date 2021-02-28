import { ApolloError } from 'apollo-server-express'
import { UserDentist } from '../../../models'


export const query = {
    getAllDentists: async () => {
        try {
            // Find All Patients
            return await UserDentist.find({})

        } catch ({ message }) {
            throw new ApolloError(message)
        }
    }, 
}