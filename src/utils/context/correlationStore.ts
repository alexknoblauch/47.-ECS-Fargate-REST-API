import { AsyncLocalStorage } from "async_hooks"

const asyncLocalStoreInstance = new AsyncLocalStorage<string>()

export default asyncLocalStoreInstance