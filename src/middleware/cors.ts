import { cors } from "hono/cors";
import {Hono} from "hono";

export const middlewareCors = (app:Hono) => app.use(
    "/api/*",
    cors({
        origin: ["http://localhost:3000"],
    })
)
