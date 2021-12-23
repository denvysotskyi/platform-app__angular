import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction
} from '../actions/get-article.actions'
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service'
import { ArticleInterface } from '../../../shared/interfaces/article.interface'

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) =>
            getArticleSuccessAction({ article })
          ),
          catchError(() => of(getArticleFailureAction()))
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService
  ) {}
}
