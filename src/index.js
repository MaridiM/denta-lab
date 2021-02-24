import './init/app'
import { PORT } from './init/config'
import { server } from './init/server'
import './init/db'
import { graphqlPath, subscriptionsPath } from './init/apolloServer'

server.listen(PORT, err => {
    if( !err ) {
        console.log(`✔️ Server ready at http://localhost:${PORT}${graphqlPath}`)
        console.log(`✔️ Subscriptions ready at http://localhost:${PORT}${subscriptionsPath}`)
    } else {
        console.log('❌ Server is not running. ' + err)
    }
})