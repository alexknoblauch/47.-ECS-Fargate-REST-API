import { createClient } from "redis";
import logger from "./winston";

export const redisClient = createClient({
    url: 'redis://localhost:6379'           //Docker redis://redis:6379    AWS redis://default:abc123@redis-12345.us-east-1.cloud.redislabs.com:12345
})

redisClient.on('error', (err) => {
    logger.info('Redisclient Error', err)
})

redisClient.on('connect', () => {
        logger.info('Redisclient connected')
})

export const initRedis = async function() {
    if(!redisClient.isOpen) {
        try {
            await redisClient.connect()
        } catch(err) {
            //errror
        }
    }
}