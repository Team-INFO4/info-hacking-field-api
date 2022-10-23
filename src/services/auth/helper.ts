import crypto from 'crypto'

export const convertToSHA512 = (payload: string): string => {
  const encrypted = crypto.createHash('sha512').update(payload).digest('hex')

  return encrypted
}
