import rateLimit from 'express-rate-limit'
import { HTTP_MESSAGE } from '../constants/http'

export const okJson = { message: 'ok' }

export const limiter = () => {
  return rateLimit({
    max: 1,
    windowMs: 1000,
    message: { error: HTTP_MESSAGE.TOO_MANY_REQUEST },
  })
}
