import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from '../actions/get-popular-tags-actions'
import { TagType } from '../../../../types/tag.type'
import { PopularTagsService } from '../../services/popular-tags.service'

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((tags: TagType[] | null) => {
            return getPopularTagsSuccessAction({ tags })
          }),
          catchError(() => {
            return of(getPopularTagsFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
