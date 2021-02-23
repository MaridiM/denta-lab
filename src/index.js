import './init/app'
import { PORT } from './init/config'
import { server } from './init/server'
import './init/db'

server.listen(PORT, err => {
    err 
        ? console.log('❌ Server is not running. ' + err)
        : console.log(`✔️ Server is running on http://localhost:${PORT}`)
})