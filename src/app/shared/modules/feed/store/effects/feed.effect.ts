import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction
} from '../actions/feed.actions'
import { FeedService } from '../../services/feed.service'
import { FeedResponseInterface } from '../../interfaces/feed-response.interface'

@Injectable()
export class FeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: FeedResponseInterface) => {
            return getFeedSuccessAction({ feed })
          }),
          catchError(() => {
            return of(getFeedFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
