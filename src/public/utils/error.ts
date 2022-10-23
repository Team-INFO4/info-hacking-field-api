import { NextFunction, Request, Response } from 'express'
import createError, { HttpError } from 'http-errors'
import { HTTP_CODE, HTTP_MESSAGE } from '../constants/http'

export const errorHandler = (
  error: Error | HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const message = error.message

  console.log(error)

  if (createError.isHttpError(error)) {
    res.statusCode = error.statusCode
  } else {
    res.statusCode = HTTP_CODE.SERVER_ERROR
  }

  res.json({ error: { message } })
}
