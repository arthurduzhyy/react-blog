import { jwtDecode } from 'jwt-decode'

interface Token {
  exp: number
  given_name: string
  family_name: string
  unique_name: string
  email: string
  profilePicture: string
  regTi: string
  gend?: string
  sub: string
}

export const parseJwt = (token: string): Token | null => {
  try {
    return jwtDecode(token)
  } catch (e) {
    console.error(e)
    return null
  }
}