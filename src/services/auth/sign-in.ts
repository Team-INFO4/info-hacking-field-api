import { HackingField } from '@team-info4/info-models'
import { SignInPayload } from 'auth'
import createHttpError from 'http-errors'
import { convertToSHA512, signAccessJwt, signRefreshJwt } from './helper'

export const signIn = async (payload: SignInPayload) => {
  const { email, password, type } = payload

  const user = await HackingField.User.findOne({
    attributes: ['id', 'email', 'name', 'password', 'type'],
    where: {
      email,
    },
  })

  if (!user) {
    throw new createHttpError.Unauthorized(
      '이메일이나 비밀번호가 잘못되었습니다.',
    )
  }

  if (user.password !== convertToSHA512(password)) {
    throw new createHttpError.Unauthorized(
      '이메일이나 비밀번호가 잘못되었습니다.',
    )
  }

  const accessToken = signAccessJwt(user)
  const refreshToken = signRefreshJwt(accessToken)

  return {
    accessToken,
    refreshToken,
  }
}
