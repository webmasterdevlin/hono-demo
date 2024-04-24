import { logger } from 'hono/logger'
import {Hono} from "hono";

export const customLogger = (message: string, ...rest: string[]) => {
    console.log(message, ...rest)
}

export const middlewareLogger  =  (app:Hono) => app.use(logger(customLogger))
