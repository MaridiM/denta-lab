import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'


const root = 'localhost:8000'

// GraphQL Server
const uri = `http://${root}`
const httpLink = createHttpLink({ uri })


// WebSocket config
const wsLink = new WebSocketLink({
    uri: `ws://${root}/graphql`
})

// Auth config, end set in context
const authLink = setContext( (_, { headers } ) => {
    // Get item from  local storage
    const token = localStorage.getItem('token')
    // Return all headers, and set authorization: token
    return { 
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
    }
})

// Wrapper httpLink in context
const wrapperHttpLink = authLink.concat(httpLink)


const link = split(
    ({ query }) => {
        // Get main definition from query
        const definition = getMainDefinition(query)

        return (
            definition.king === 'OperationDefinition' &&
            definition.operation === 'subscriptions'
        )
    },
    wsLink, // if work websocket
    wrapperHttpLink // if work graphql 
)


// Create ApolloClient 
export const client = new ApolloClient({
    // Cache initialization
    cache: new InMemoryCache(),
    link,
})