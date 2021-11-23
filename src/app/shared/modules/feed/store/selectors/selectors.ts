import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppStateInterface } from '../../../../interfaces/app-state.interface'
import { FeedStateInterface } from '../../interfaces/feed-state.interface'
import { GetFeedResponseInterface } from '../../interfaces/get-feed-response.interface'

export const feedKey = 'feed'

export const selectFeature = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface
>(feedKey)

export const isLoadingSelector = createSelector(
  selectFeature,
  (feedState: FeedStateInterface) => feedState.isLoading
)

export const feedSelector = createSelector(
  selectFeature,
  (feedState: FeedStateInterface) => feedState.data
)

export const errorSelector = createSelector(
  selectFeature,
  (feedState: FeedStateInterface) => feedState.error
)
