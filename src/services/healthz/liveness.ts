import createHttpError from 'http-errors'
import { okJson } from '../../public/utils/express'

export const getLiveness = () => {
  // return okJson
  throw new createHttpError.BadRequest('test')
}
