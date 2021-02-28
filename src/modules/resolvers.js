import { resolvers as usersResolvers } from './users' 

export const resolvers = {
    Query: {
        ...usersResolvers.query,
    },

    Mutation: {
        ...usersResolvers.mutation
    }
}