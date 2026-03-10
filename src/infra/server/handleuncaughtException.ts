import logger from "@/lib/winston"
import serverClose from "./serverClose"
import { Server } from 'http'

const UncaughtExceptionHandler = function(server: Server, error: Error) {
    logger.error(error)
    serverClose(server, 'Uncaught Exception: Server close')
}

export default UncaughtExceptionHandler