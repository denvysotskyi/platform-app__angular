import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppStateInterface } from '../../../shared/interfaces/app-state.interface'
import { EditArticleStateInterface } from '../../interfaces/edit-article-state.interface'

export const createKey = 'edit'

export const selectFeature = createFeatureSelector<
  AppStateInterface,
  EditArticleStateInterface
>(createKey)

export const isLoadingSelector = createSelector(
  selectFeature,
  (editArticleState: EditArticleStateInterface) => editArticleState.isLoading
)

export const articleSelector = createSelector(
  selectFeature,
  (editArticleState: EditArticleStateInterface) => editArticleState.article
)

export const isSubmittingSelector = createSelector(
  selectFeature,
  (editArticleState: EditArticleStateInterface) => editArticleState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  selectFeature,
  (editArticleState: EditArticleStateInterface) =>
    editArticleState.validationErrors
)
