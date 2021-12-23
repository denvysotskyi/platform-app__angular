import { createAction, props } from '@ngrx/store'

import { ActionTypes } from './action-types'
import { ArticleInputInterface } from '../../../shared/interfaces/article-input.interface'
import { ArticleInterface } from '../../../shared/interfaces/article.interface'
import { BackendErrorsInterface } from '../../../shared/interfaces/backend-errors.interface'

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; articleInput: ArticleInputInterface }>()
)

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
)

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
