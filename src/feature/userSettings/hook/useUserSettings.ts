// src/feature/userSettings/hook/useUserSettings.ts
import { useCallback, useReducer, useState } from 'react'
import { setUserAction } from '../store/user.actions'
import { initialUserState, userReducer } from '../store/user.reducer'
import { userSettingsService } from '../service/userSettingService'

export const useUserSettings = () => {
  const [state, dispatch] = useReducer(userReducer, initialUserState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const userSettingsServiceInstance = new userSettingsService()
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

const updateEmail = async (email: string) => {
    const emailRequest = {email: email}
    const response = await executeRequest(() => userSettingsServiceInstance.updateEmail(emailRequest))
    if (response) {
      dispatch(setUserAction(response))
    }
}

  return {
    user: state.user,
    updateEmail
  }
}