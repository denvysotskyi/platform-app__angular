import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props
} from '@ngrx/store'

import { environment } from '../../../environments/environment'
import { RegisterRequestInterface } from '../types/registerRequest.interface'
import { ActionTypes } from '../types/actionTypes'
import { AuthStateInterface } from '../types/authState.interface'

export const REGISTER_KEY = 'register'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>()
)

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

export const selectFeature =
  createFeatureSelector<AuthStateInterface>(REGISTER_KEY)
// export const countSelector = createSelector(
//   selectFeature,
//   (state) => state.count
// )
