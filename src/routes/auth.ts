import { NextFunction, Request, Response, Router } from 'express'
import { body } from 'express-validator'
import validator from './'
import { okJson } from '../public/utils/express'
import { signUp } from '../services/auth'
import { validate } from '../public/utils/validate'

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
  validate([body('test').exists()]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await signUp(req.body)

      res.json({ data })
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
