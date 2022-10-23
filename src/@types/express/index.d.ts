import { Request } from 'express';
import { HackingField } from '@team-info4/info-models'

declare module 'express' {
  interface Request extends Request {
    user?: HackingField.User
  }
}