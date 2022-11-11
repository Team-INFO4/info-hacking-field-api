import { signIn } from './../services/auth/sign-in'
import { NextFunction, Request, Response, Router } from 'express'
import { body } from 'express-validator'
import validator from './'
import { okJson } from '../public/utils/express'
import { signUp } from '../services/auth'
import { validate } from '../public/utils/validate'
import { UserType } from '@team-info4/info-models/dist/models/hackingField/user.model'

const url = '/auth'
const router = Router()

router.post(
  '/sign-in',
  validate([body('email').isEmail().isString(), body('password').isString()]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await signIn(req.body)

      res.json({ data })
    } catch (err) {
      return next(err)
    }
  },
)

router.post(
  '/sign-up',
  validate([
    body('email').exists().isEmail().isString(),
    body('name').exists().isString(),
    body('content').exists().isString(),
    body('type').exists().isIn(['USER', 'TEAM']),
    body('password').exists().isString(),
  ]),
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
