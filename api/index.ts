import { Hono } from 'hono'
import jobs from '../data/jobs.json'

const app = new Hono()

app.get('/jobs', (ctx) => ctx.json({ jobs }))

export default app
