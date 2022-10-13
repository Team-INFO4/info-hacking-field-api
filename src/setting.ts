import useragent from "express-useragent"
import cors from "cors"
import helmet from "helmet"
import express from "express"

export const settingServer = () => {
  const expressServer = express()

  expressServer.use(cors())
  expressServer.use(helmet())
  expressServer.use(express.json())
  expressServer.use(express.urlencoded({ extended: true }))
  expressServer.use(useragent.express())

  return expressServer
}
