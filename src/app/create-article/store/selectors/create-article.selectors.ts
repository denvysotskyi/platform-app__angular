import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppStateInterface } from '../../../shared/interfaces/app-state.interface'
import { CreateArticleStateInterface } from '../../interfaces/create-article-state.interface'

export const createKey = 'create'

export const selectFeature = createFeatureSelector<
  AppStateInterface,
  CreateArticleStateInterface
>(createKey)

export const isSubmittingSelector = createSelector(
  selectFeature,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  selectFeature,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.validationErrors
)
