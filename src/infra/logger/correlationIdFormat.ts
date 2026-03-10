import asyncLocalStoreInstance from "@/utils/context/correlationStore";
import winston from "winston";

const correlationIdFormat = winston.format((info) => {
    const correlationId = asyncLocalStoreInstance.getStore()

    if(!correlationId) {
        info.correlationId = 'N/A'
    } else {
        info.correlationId = correlationId
    }

    return info
})

export default correlationIdFormat
