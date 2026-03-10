import AppError from "../AppError";

class HttpAppError extends AppError {
    statusCode: number
    status: string
    action?: string
    reason?: string

    constructor(message: string, statusCode: number, code: string, action?: string, reason?:string, context: Record<string, unknown> = {}) {
        super(message, code, context)

        this.statusCode = statusCode
        this.status = statusCode >= 500 ? 'error' : 'fail'
        this.action = action ?? 'REQUEST'
        this.reason = reason ?? code
    }
}

export default HttpAppError