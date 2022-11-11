import crypto from 'crypto'
import jwt, { JwtPayload } from 'jsonwebtoken'

export const convertToSHA512 = (payload: string) => {
  const encrypted = crypto.createHash('sha512').update(payload).digest('hex')

  return encrypted
}

export const signAccessJwt = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.SALT || 'test', {
    algorithm: 'HS512',
    expiresIn: '3d',
  })
}

export const signRefreshJwt = (payload: string) => {
  return jwt.sign(payload, process.env.SALT || 'test', {
    algorithm: 'HS512',
    expiresIn: '14d',
  })
}

export const verifyJwt = (payload: string) => {
  return jwt.verify(payload, process.env.SALT || 'test', {
    algorithms: ['HS512'],
  })
}
