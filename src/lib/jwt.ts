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

export const isTokenExpired = (token: string): boolean => {
  const parsedToken = parseJwt(token)
  if (!parsedToken) return false

  const currentTime = Math.floor(Date.now() / 1000)
  return parsedToken.exp > currentTime
}