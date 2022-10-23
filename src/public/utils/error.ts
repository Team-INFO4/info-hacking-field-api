import { NextFunction, Request, Response } from 'express'
import createError, { HttpError } from 'http-errors'
import { HTTP_CODE, HTTP_MESSAGE } from '../constants/http'

export const errorHandler = (
  error: Error | HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (createError.isHttpError(error)) {
    if (error.statusCode >= 500) {
      console.log(error)
    } else {
      console.log(error)
      res.statusCode = error.statusCode
      res.json({
        type: error.name,
        message: error.message,
        description: error.description,
      })
    }
  } else {
    console.log(error)
    res.statusCode = HTTP_CODE.SERVER_ERROR
    res.json({
      message: error.message,
      description: '다시 한번 시도해주세요.',
    })
  }
}
