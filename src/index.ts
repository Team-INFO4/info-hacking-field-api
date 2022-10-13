import http from "http"
import { settingServer } from "./setting"

const startServer = () => {
  try {
    const expressServer = settingServer()
    const server = http.createServer(expressServer)

    server.listen(process.env.EXPRESS_PORT, () => {
      console.log(`Server is running on port : ${process.env.EXPRESS_PORT}`)
    })
  } catch (err) {
    console.error(err)
  }
}

startServer()
