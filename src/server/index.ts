import pino from 'express-pino-logger'
import express from 'express'
import { Request, Response } from 'express'
import UserController from '../controllers/http/user.controller'

const app = express()

app.use(pino())

app.get('/ping', (req: Request, res: Response) => {
  res.json({ data: { message: 'pong' } })
})

app.use('/api', UserController)

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`✅ Server is running on port : ${process.env.EXPRESS_PORT}`)
})
