import asyncLocalStoreInstance from "@/utils/context/correlationStore";
import { NextFunction, Response, Request } from "express";
import { v4 as uuidv4 } from 'uuid'

const correlationId = function(req: Request, res: Response, next: NextFunction) {
    const correlationId = uuidv4()
    res.setHeader('x-correlation-id', correlationId)

    asyncLocalStoreInstance.run(correlationId, () => {
        next()
    })
}

export default correlationId