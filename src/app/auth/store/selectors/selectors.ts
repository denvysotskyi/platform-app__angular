import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthStateInterface } from '../../interfaces/authState.interface'

export const authKey = 'auth'

export const selectFeature = createFeatureSelector<AuthStateInterface>(authKey)

export const isSubmittingSelector = createSelector(
  selectFeature,
  (state: AuthStateInterface) => state.isSubmitting
)

export const validationErrorsSelector = createSelector(
  selectFeature,
  (state: AuthStateInterface) => state.validationErrors
)
