import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import { ArticleInterface } from '../../../shared/interfaces/article.interface'
import { HttpErrorResponse } from '@angular/common/http'
import { EditArticleService } from '../../services/edit-article.service'

@Injectable()
export class EditArticleEffect {
  // createArticle$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(createArticleAction),
  //     switchMap(({ articleInput }) => {
  //       return this.createArticleService.createArticle(articleInput).pipe(
  //         map((article: ArticleInterface) =>
  //           createArticleSuccessAction({ article })
  //         ),
  //         catchError((errorResponse: HttpErrorResponse) =>
  //           of(
  //             createArticleFailureAction({ errors: errorResponse.error.errors })
  //           )
  //         )
  //       )
  //     })
  //   )
  // )

  // redirectAfterEdit$ = editEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(createArticleSuccessAction),
  //       tap(({ article }) => {
  //         this.router.navigate(['/articles', article.slug])
  //       })
  //     ),
  //   { dispatch: false }
  // )

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
}
