import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppStateInterface } from 'src/app/shared/interfaces/app-state.interface'
import { ArticleStateInterface } from '../../interfaces/article-state.interface'

export const articleKey = 'article'

export const selectFeature = createFeatureSelector<
  AppStateInterface,
  ArticleStateInterface
>(articleKey)

export const isLoadingSelector = createSelector(
  selectFeature,
  (articleState: ArticleStateInterface) => articleState.isLoading
)

export const articleSelector = createSelector(
  selectFeature,
  (articleState: ArticleStateInterface) => articleState.data
)

export const errorSelector = createSelector(
  selectFeature,
  (articleState: ArticleStateInterface) => articleState.error
)

export const isAuthor = createSelector(
  selectFeature,
  (articleState: ArticleStateInterface) => articleState.isAuthor
)
