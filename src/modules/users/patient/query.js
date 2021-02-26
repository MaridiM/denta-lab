import { ApolloError } from 'apollo-server-express'
import { UserPatient } from '../../../models'


export const query = {
    getAllPatients: async () => {
        try {
            // Find All Patients
            return  await UserPatient.find({})

        } catch ({ message }) {
            throw new ApolloError(message)
        }
    }, 
}