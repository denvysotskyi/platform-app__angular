import { createReducer, on } from '@ngrx/store'
import { routerNavigationAction } from '@ngrx/router-store'

import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from '../actions/popular-tags.actions'
import { PopularTagsStateInterface } from '../../interfaces/popular-tags-state.interface'

export const initialState: PopularTagsStateInterface = {
  isLoading: false,
  data: null,
  error: null
}

export const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.tags
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false
    })
  )
)
