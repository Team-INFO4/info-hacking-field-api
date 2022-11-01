declare module 'auth' {
  import { HackingField } from '@team-info4/info-models'

  type SignUpPayload = Pick<
    HackingField.User,
    'name' | 'content' | 'password' | 'email' | 'type'
  >

  type SignInPayload = Pick<HackingField.User, 'password' | 'email' | 'type'>
}
