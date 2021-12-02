import { createReducer, on } from '@ngrx/store'
import { routerNavigationAction } from '@ngrx/router-store'

import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction
} from '../actions/article.actions'
import { ArticleStateInterface } from '../../interfaces/article-state.interface'

export const initialState: ArticleStateInterface = {
  isLoading: false,
  data: null,
  error: null
}

export const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false
    })
  ),
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
)
