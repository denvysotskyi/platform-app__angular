import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction,
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction
} from '../actions/article.actions'
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service'
import { ArticleService } from '../../services/article.service'
import { ArticleInterface } from '../../../shared/interfaces/article.interface'

@Injectable()
export class ArticleEffect {
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

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => deleteArticleSuccessAction()),
          catchError(() => of(deleteArticleFailureAction))
        )
      })
    )
  )

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
    private articleService: ArticleService,
    private router: Router
  ) {}
}
