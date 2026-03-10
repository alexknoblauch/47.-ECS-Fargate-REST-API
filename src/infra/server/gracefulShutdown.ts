import logger from '@/lib/winston'
import { Server } from 'http'

const gracefulShutdown = function(server: Server) {
    try {
        server.close(async() => {
            //await disconnect DB
            process.exit(0)
        })
    } catch(err){
        logger.error('Error while Graceful shutdown.')
        process.exit(1)
    }
}

export default gracefulShutdown