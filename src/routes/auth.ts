import { NextFunction, Request, Response, Router } from 'express'
import { okJson } from '../public/utils/express'

const url = '/auth'
const router = Router()

router.post(
  '/sign-in',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json(okJson)
    } catch (err) {
      return next(err)
    }
  },
)

router.post(
  '/sign-up',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json(okJson)
    } catch (err) {
      next(err)
    }
  },
)

router.post(
  '/sign-out',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json(okJson)
    } catch (err) {
      next(err)
    }
  },
)

router.get(
  '/sign-down',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json(okJson)
    } catch (err) {
      next(err)
    }
  },
)

router.get(
  '/send-code',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json(okJson)
    } catch (err) {
      next(err)
    }
  },
)

router.get(
  '/verify-code',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json(okJson)
    } catch (err) {
      next(err)
    }
  },
)

export default { url, router }
