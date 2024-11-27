export interface LoginForm {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
}

export interface RegisterForm {
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
}
