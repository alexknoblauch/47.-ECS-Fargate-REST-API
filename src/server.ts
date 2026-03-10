/**
 * Node Modules
 */
import express from 'express'
import cors, { CorsOptions } from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import config from './config'

/**
 * Types
 */
import { Server } from 'http'
import serverClose from './infra/server/serverClose'
import UncaughtExceptionHandler from './infra/server/handleuncaughtException'
import UnhandledRejectionHandler from './infra/server/handleUnhandledRejection'
import correlationId from './middleware/correlationId'
import logger from './lib/winston'
import { initRedis } from './lib/redis'
import initializeRedisLimiter from './lib/express-rate-limit'

process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
    if(server) UnhandledRejectionHandler(server, reason, promise)
})

process.on('uncaughtException', (error) => {
    if(server) UncaughtExceptionHandler(server, error)
})


const createApp = function(){
    const app = express()

    const corsOptions: CorsOptions = {
        origin: config.CORS_ORIGINS,
    }

    app.use(correlationId)
    app.use(cors(corsOptions))
    app.use(helmet())
    app.use(compression({ threshold: 1024 }))

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    return app
}

let server: Server

const startServer = async function() {
    try {
        const app = createApp()
        //await DBConnent
        await initRedis()

        const redisRateLimiter = initializeRedisLimiter()
        app.use(redisRateLimiter)

        app.use('/', router)
        app.use('*', notFoundMiddleware)
        app.use(errorHandler)

        server = app.listen(config.PORT, () => {
        
                logger.info(`Server listening at Port ${config.PORT}`)
                process.on('SIGINT',() => serverClose(server))
                process.on('SIGTERM',() => serverClose(server))
        })
    }catch(err){
        logger.error('Error while Start Sever')           // später winston
        process.exit(1)
    }
}
startServer()