import AppError from "../AppError";

class InfrastructureError extends AppError {
    service: string
    cause?: string

    constructor(message: string, service: string, cause?: string context: Record<string, unknown> = {}) {
        super(message, 'INFRASTRUCTURE_ERROR', service, {...context, cause})

        this.service = service
        this.cause = cause
    }
}

export default InfrastructureError