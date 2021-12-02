import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppStateInterface } from '../../../../interfaces/app-state.interface'

import { PopularTagsStateInterface } from '../../interfaces/popular-tags-state.interface'

export const tagsKey = 'tags'

export const selectFeature = createFeatureSelector<
  AppStateInterface,
  PopularTagsStateInterface
>(tagsKey)

export const isLoadingSelector = createSelector(
  selectFeature,
  (tagsState: PopularTagsStateInterface) => tagsState.isLoading
)

export const tagsSelector = createSelector(
  selectFeature,
  (tagsState: PopularTagsStateInterface) => tagsState.data
)

export const errorSelector = createSelector(
  selectFeature,
  (tagsState: PopularTagsStateInterface) => tagsState.error
)
