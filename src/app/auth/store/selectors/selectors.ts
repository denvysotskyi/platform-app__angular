import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppStateInterface } from '../../../shared/interfaces/app-state.interface'
import { AuthStateInterface } from '../../interfaces/auth-state.interface'

export const authKey = 'auth'

export const selectFeature = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>(authKey)

export const isSubmittingSelector = createSelector(
  selectFeature,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const currentUserSelector = createSelector(
  selectFeature,
  (authState: AuthStateInterface) => authState.currentUser
)

export const isLoggedInSelector = createSelector(
  selectFeature,
  (authState: AuthStateInterface) => authState.isLoggedIn
)

export const isAnonymousSelector = createSelector(
  selectFeature,
  (authState: AuthStateInterface) => authState.isLoggedIn === false
)

export const validationErrorsSelector = createSelector(
  selectFeature,
  (authState: AuthStateInterface) => authState.validationErrors
)
