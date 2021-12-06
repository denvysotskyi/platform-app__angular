import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { AuthService } from '../../services/auth.service'
import { CurrentUserInterface } from '../../../shared/interfaces/current-user.interface'
import { LocalStorageService } from '../../../shared/services/local-storage.service'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from '../actions/current-user.actions'

@Injectable()
export class CurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.localStorageService.get('accessToken')
        if (!token) {
          return of(getCurrentUserFailureAction())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser })
          }),
          catchError(() => of(getCurrentUserFailureAction()))
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}
}
