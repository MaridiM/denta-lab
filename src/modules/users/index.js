// Queries
import { query as patientsQuery } from './patient/query' 
import { query as dentistsQuery } from './dentist/query' 
import { query as personalQuery } from './personal/query' 

// Mutations
import { mutation as usersMutation } from './mutation' 
// import { mutation as patientsMutation } from './patient/mutation' 
// import { mutation as dentistsMutation } from './dentist/mutation' 
// import { mutation as personalMutation } from './personal/mutation' 



export const resolvers = {
    query: {
        ...patientsQuery,
        ...dentistsQuery,
        ...personalQuery,
    },
    mutation: {
        ...usersMutation
    //     ...patientsMutation,
    //     ...dentistsMutation,
    //     ...personalMutation,
    }
}
