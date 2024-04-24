import { Hono } from "hono";
import {routerPosts, routerUsers} from "./controllers";
import {middlewareCors, middlewareLogger} from "./middleware";

const prefix = "/api"
const app = new Hono()
  .basePath(prefix)

middlewareLogger(app);
middlewareCors(app)

routerPosts(app);
routerUsers(app)


export default {
    port: 8080,
    fetch: app.fetch
};
