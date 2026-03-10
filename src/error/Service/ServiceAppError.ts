import AppError from "../AppError";

class ServiceAppError extends AppError {
    constructor(message: string, code: string, context: Record<string, unknown> = {}) {
        super(message, code, context)
    }
}

export default ServiceAppError