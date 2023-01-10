import express from 'express'
import cors from 'cors'
import jobs from '../data/jobs.json'

const app = express()
const PORT = process.env.PORT ?? '4000'

app.use(cors())
app.use(express.json())

app.get('/jobs', (_req, res) => {
  return res.status(200).json({ jobs })
})

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
})
