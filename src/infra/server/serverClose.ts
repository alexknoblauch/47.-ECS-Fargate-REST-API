/*
* Types
*/
import logger from '@/lib/winston'
import { Server } from 'http'

const serverClose = function(server: Server, message: string = 'Server close') {
    logger.info(message)
    server.close(() => {
        process.exit(1)
    })

    setTimeout(() => {
        logger.error(message)
        server.close(() => {
            process.exit(0)
        })
    }, 10000)
}

export default serverClose