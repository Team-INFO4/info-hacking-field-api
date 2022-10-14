import { NextFunction, Request, Response } from "express"
import httpError, { HttpError } from "http-errors"
import { HTTP_CODE, HTTP_MESSAGE } from "../constants/http"

export const errorHandler = (
  error: Error | HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (httpError.isHttpError(error)) {
    if (error.statusCode >= HTTP_CODE.SERVER_ERROR) {
    } else {
      res.statusCode = error.statusCode
      res.json({
        type: HTTP_MESSAGE.SERVER_ERROR,
        message: error.message,
        description: "잠시 후 다시 시도해주세요.",
      })
    }
  }
}
