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
    },
    subscriptions: {// Change subscriptions path
        path: '/subscriptions'
    },
    options: {
        awaitRefresh: true
    }
})

// Endpoints
const { graphqlPath, subscriptionsPath } = apolloServer
// Set path to subscriptions


export { apolloServer, graphqlPath, subscriptionsPath }