import { createReducer, on } from '@ngrx/store'

import { AuthStateInterface } from '../../interfaces/auth-state.interface'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction
} from '../actions/register-actions'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction
} from '../actions/login-actions'

export const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
}

export const reducers = createReducer(
  initialState,
  on(
    registerAction,
    (authState): AuthStateInterface => ({
      ...authState,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    registerSuccessAction,
    (authState, action): AuthStateInterface => ({
      ...authState,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true
    })
  ),
  on(
    registerFailureAction,
    (authState, action): AuthStateInterface => ({
      ...authState,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    loginAction,
    (authState): AuthStateInterface => ({
      ...authState,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    loginSuccessAction,
    (authState, action): AuthStateInterface => ({
      ...authState,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true
    })
  ),
  on(
    loginFailureAction,
    (authState, action): AuthStateInterface => ({
      ...authState,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
)
