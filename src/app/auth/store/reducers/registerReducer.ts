import { createReducer, on } from '@ngrx/store'

import { AuthStateInterface } from '../../interfaces/authState.interface'
import { registerAction } from '../actions/actions'

export const initialState: AuthStateInterface = {
  isSubmitting: false
}

export const registerReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true
    })
  )
)
