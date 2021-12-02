import { createAction, props } from '@ngrx/store'

import { ActionTypes } from './action-types'
import { FeedResponseInterface } from '../../interfaces/feed-response.interface'

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
)

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: FeedResponseInterface }>()
)

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE)
