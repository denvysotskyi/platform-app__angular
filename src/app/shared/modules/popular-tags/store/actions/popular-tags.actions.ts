import { createAction, props } from '@ngrx/store'

import { ActionTypes } from './action-types'
import { TagType } from '../../../../types/tag.type'

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS)

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ tags: TagType[] | null }>()
)

export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
)
