import RedisStore from "rate-limit-redis"
import { redisClient } from "./redis"
import rateLimit from "express-rate-limit"
import InfrastructureError from "@/error/Infrastructure/InfrastructureError"

const initializeRedisLimiter = function(){
    let store

    if(!redisClient.isOpen) {
        throw new InfrastructureError('No Redis connection found', 'redis', 'REDIS_CONNECTION_ERROR', {component: 'redis-limiter'})
    }

    try {
        store = new RedisStore({
            sendCommand: (...args: string[]) => redisClient.sendCommand(args),
        })
    } catch(err) {
        throw new InfrastructureError('Error when creating Redisstor', 'redis', 'CREATE_REDISSTORE_ERROR',  {component: 'redis-limiter'})
    }

    const limiter = rateLimit({
        store,
        windowMs: 15 * 60 * 1000,
        limit: 100,
        standardHeaders: true,
    })

    return limiter
}

export default initializeRedisLimiter