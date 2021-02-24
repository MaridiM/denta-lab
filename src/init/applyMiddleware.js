// Apollo server
import { apolloServer } from './apolloServer'

// Express App 
import { app } from './app'

// Apply  middleware to apollo server, with app and cors: false
apolloServer.applyMiddleware({app, cors: false})

export { apolloServer }