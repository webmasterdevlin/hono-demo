import {Hono} from "hono";

const routerApp = new Hono();

routerApp.get('/api', (c) => {
    return c.json({ message: 'Hello Hono!' })
})


export default routerApp;
