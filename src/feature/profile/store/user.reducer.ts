import { User } from '../service/types'
import { UserAction, UserActionTypes } from './user.actions'

interface UserState {
  user: User | null
}

export const initialUserState: UserState = {
  user: null
}

export const userReducer = (state: UserState = initialUserState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
