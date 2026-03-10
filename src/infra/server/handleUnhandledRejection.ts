import { Server } from 'http'
import serverClose from './serverClose'
import logger from '@/lib/winston'
 
const UnhandledRejectionHandler = function(server: Server, reason: any, promise: Promise<any>) {
    logger.error(reason, promise)
    
    serverClose(server, 'Unhandled Rejection: Server close', )
}

export default UnhandledRejectionHandler