// Core
import http from 'http'
// Servers express app / apollo server
import { app } from './app'
import { apolloServer } from './apolloServer'

// Wrapped express app in http server
const server = http.createServer(app)
// Install subscriptions handlers by server
apolloServer.installSubscriptionHandlers(server)

// Endpoint
export { server, apolloServer }