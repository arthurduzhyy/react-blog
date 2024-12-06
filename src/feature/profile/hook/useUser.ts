import { useCallback, useEffect, useReducer } from 'react'
import UserService from '../service/user.service'
import { setUserAction } from '../store/user.actions'
import { initialUserState, userReducer } from '../store/user.reducer'

const useUser = () => {
  const [state, dispatch] = useReducer(userReducer, initialUserState)

  const userService = new UserService()

  const loadUser = useCallback(() => {
    const response = userService.getProfile()
    dispatch(setUserAction(response!))
  }, [])

  useEffect(() => {
    loadUser()
  }, [loadUser])

  return {
    user: state.user,
    loadUser
  }
}

export default useUser
