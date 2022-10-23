import createError from "http-errors"

export class BadRequestt extends createError.BadRequest {
  name: string
  description: string

  constructor(message = "BadRequest", description = "test") {
    super(message)
    this.name = "test"
    this.description = description
  }
}
