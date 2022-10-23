import createHttpError from "http-errors"
import BadRequest from "http-errors"
import { okJson } from "../../public/utils/express"
import { AppForbidden, BadRequestttxwxw } from "../../public/utils/http-error"

export const getLiveness = () => {
  return okJson
}
