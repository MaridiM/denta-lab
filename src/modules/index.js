import { resolvers as usersResolvers } from './users' 

console.log(usersResolvers)
export const resolvers = {
    query: {
        ...usersResolvers.query,
    },

    mutation: {
        ...usersResolvers.mutation
    }
}