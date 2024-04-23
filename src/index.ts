import routerApp from "./routes/todo";
import { cors } from 'hono/cors'

routerApp.use('/api/*', cors({
  origin: ['http://localhost:3000'],
}))


const app = routerApp;

export default app
