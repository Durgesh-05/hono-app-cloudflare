import { Hono, Next } from 'hono';

const app = new Hono();

// Middleware is same as express and instead of req and res we need one parameter common is c named Context

async function authMiddleware(c: any, next: Next) {
  if (c.req.header('Authorization')) {
    // validate auth token
    await next();
  }
  return c.json({ message: 'No Access' });
}

app.get('/', async (c) => {
  // to get body we have to use await else it will show promise pending
  // const body = await c.req.json();
  // console.log(body);
  return c.json({ message: 'Hello from Hono Server' });
});

export default app;
