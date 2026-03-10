import dotenv from 'dotenv'

dotenv.config()


const config = {
    CORS_ORIGINS: process.env.CORS_ORIGINS,   //abändern
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    LOG_LEVEL: process.env.LOG_LEVEL
}
export default config