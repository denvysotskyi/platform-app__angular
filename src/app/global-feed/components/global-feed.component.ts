import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { CurrentUserInterface } from '../../shared/interfaces/current-user.interface'
import { select, Store } from '@ngrx/store'
import { currentUserSelector } from '../../auth/store/selectors/selectors'

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.sass']
})
export class GlobalFeedComponent implements OnInit {
  apiUrl = '/articles'
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
