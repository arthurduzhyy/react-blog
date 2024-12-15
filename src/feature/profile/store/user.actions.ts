import { User } from '../service/types'

type UserPayloadTypes = User | null

export interface UserAction {
  type: UserActionTypes
  payload: UserPayloadTypes
}

export enum UserActionTypes {
  SET_USER = 'SET_USER'
}

export const setUserAction = (user: User): UserAction => ({
  type: UserActionTypes.SET_USER,
  payload: user
})
