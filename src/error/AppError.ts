
class AppError extends Error {
    code: string
    context: Record<string, unknown>

    constructor(message: string, code: string, context: Record<string, unknown> = {}) {
        super(message)

        this.name = this.constructor.name
        this.code = code
        this.context = context

        Error.captureStackTrace(this, this.constructor)
        Object.setPrototypeOf(this, new.target.prototype)
    }
}

export default AppError