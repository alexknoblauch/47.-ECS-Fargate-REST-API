import RedisStore from "rate-limit-redis"
import { redisClient } from "./redis"
import rateLimit from "express-rate-limit"

const initializeRedisLimiter = function(){
    let store

    if(!redisClient.isOpen) {
        // InfrastructureError
    }

    try {
        store = new RedisStore({
            sendCommand: (...args: string[]) => redisClient.sendCommand(args),

        })
    } catch(err) {
        // InfrastructureError
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