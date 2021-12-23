import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction
} from '../actions/update-article.actions'
import { EditArticleService } from '../../services/edit-article.service'
import { ArticleInterface } from '../../../shared/interfaces/article.interface'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ slug, articleInput }) => {
        return this.editArticleService.updateArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) =>
            updateArticleSuccessAction({ article })
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              updateArticleFailureAction({ errors: errorResponse.error.errors })
            )
          )
        )
      })
    )
  )

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug])
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
}
