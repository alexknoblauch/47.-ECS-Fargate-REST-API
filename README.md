Bemerkungen zum Projekt

## Tech Stack: Node.js & TypeScript
Express - als Webframework
Prisma - anbindugn an AWS SQL 
Redis - für Caching & Rate Limiting
Winston - für Logging


## Architektur & Design
Middleware:  ErrorHandling, CorrelationId
Logging: Winston mit Redis counter, correlationId, log level, file rotation.
Errors: ServiceError, HTTPError und InfrastructureError - Layer trennen.
Error Handler: Prod und Dev unterscheiden - verschiden viel Information leaken. AppError und ServerError unterscheiden.



## Features
RESTful API mit TypeScript und Express
Rate Limiting - mit Redis zur Schutz vor Abuse
Caching - von häufigen Daten über Redis
Structured Logging mit Winston (inkl. CorrelationID, File Rotation, Log-Level)


Dieses Projekt dient zur Übung von Synthax schreiben, ich schreibe die ganze App von Hand - ausser ein wenig Boilerplate.
Ebenfalls will ich die App Containerisieren und diesen Container über AWS Fargate launchen.
Ochestrierung soll über ECS laufen
