import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { CurrentUserInterface } from '../../../../interfaces/current-user.interface'
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector
} from '../../../../../auth/store/selectors/auth.selectors'
import { logoutAction } from '../../../../../auth/store/actions/logout.actions'
import { LocalStorageService } from '../../../../services/local-storage.service'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(
    private store: Store,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }

  onLogout(): void {
    this.store.dispatch(logoutAction())
    this.localStorageService.set('accessToken', null)
  }
}
