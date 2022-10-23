import useragent from 'express-useragent'
import cors from 'cors'
import helmet from 'helmet'
import express from 'express'
import routes from './routes'
// import pino from 'express-pino-logger'
import { limiter } from './public/utils/express'

export const settingServer = () => {
  const expressServer = express()

  expressServer.use(limiter())
  // expressServer.use(pino())
  expressServer.use(cors())
  expressServer.use(helmet())
  expressServer.use(express.json())
  expressServer.use(express.urlencoded({ extended: true }))
  expressServer.use(useragent.express())

  for (const { url, router } of routes) {
    expressServer.use(url, router)
  }

  return expressServer
}
