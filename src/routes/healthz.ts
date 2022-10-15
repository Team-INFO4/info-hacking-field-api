import { NextFunction, Request, Response, Router } from "express"
import { getReadiness, getLiveness } from "../domains/healthz/healthz.service"

const url = "/healthz"
const router = Router()

router.get(
  "/readiness",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = getReadiness()
      res.json(data)
    } catch (err) {
      return next(err)
    }
  },
)

router.get(
  "/liveness",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = getLiveness()
      res.json(data)
    } catch (err) {
      return next(err)
    }
  },
)

export default { url, router }
