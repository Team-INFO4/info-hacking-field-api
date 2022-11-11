import { HackingField } from '@team-info4/info-models'
import { SignUpPayload } from 'auth'
import createHttpError from 'http-errors'
import { okJson } from '../../public/utils/express'
import { convertToSHA512 } from './helper'

export const signUp = async (payload: SignUpPayload) => {
  const { name, content, password, email, type } = payload

  const isExist = await HackingField.User.findOne({
    where: {
      email,
    },
  })

  if (isExist) {
    throw new createHttpError.BadRequest('이미 계정이 존재합니다.')
  }

  const encrypted = convertToSHA512(password)

  await HackingField.User.create({
    name,
    content,
    email,
    type,
    password: encrypted,
    isVerified: false,
  })

  return okJson
}
