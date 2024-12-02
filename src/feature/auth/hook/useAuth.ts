import { useState } from 'react'
import AuthService from '../service/auth.service'
import { LoginForm, RegisterForm } from '../service/types'

const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const authService = new AuthService()

  const executeRequest = async <T>(request: () => Promise<T>): Promise<T | null> => {
    setLoading(true)
    setError(null)

    try {
      return await request()
    } catch (e) {
      setError((e as Error).message)
      return null
    } finally {
      setLoading(false)
    }
  }

  const login = async (data: LoginForm) => executeRequest(() => authService.login(data))

  const register = async (data: RegisterForm) => executeRequest(() => authService.register(data))

  const logout = () => authService.logout()

  return {
    loading,
    error,
    login,
    register,
    logout
  }
}

export default useAuth