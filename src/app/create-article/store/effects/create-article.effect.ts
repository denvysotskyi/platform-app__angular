import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from '../actions/create-article.actions'
import { CreateArticleService } from '../../services/create-article.service'
import { ArticleInterface } from '../../../shared/interfaces/article.interface'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article: ArticleInterface) =>
            createArticleSuccessAction({ article })
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              createArticleFailureAction({ errors: errorResponse.error.errors })
            )
          )
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug])
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) {}
}
