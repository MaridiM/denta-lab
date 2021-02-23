import { ApolloServer } from 'apollo-server-express'

// Types Deffault in graphql
import typeDefs from './types.graphql' 

// Resolvers graphql
import { resolvers } from '../resolvers' 

// Init Apollo server
const apolloServer = new ApolloServer({
    typeDefs,   //types
    resolvers,   //actions
    dataSources: () => {
        // return other APIs, rest
        return {}
    },
    context: ({req, res}) => {
        // return node req, res
        return { req, res }
    },
    playground: {
        settings: {
        "request.credentials": "include"
        }
    }
})

// Endpoints
const { graphqlPath, subscriptionsPath } = apolloServer

export { apolloServer, graphqlPath, subscriptionsPath }