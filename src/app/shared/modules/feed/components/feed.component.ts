import { Component, Input, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { getFeedAction } from '../store/actions/get-feed-actions'
import { GetFeedResponseInterface } from '../interfaces/get-feed-response.interface'
import {
  isLoadingSelector,
  feedSelector,
  errorSelector
} from '../store/selectors/selectors'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string

  isLoading$: Observable<boolean>
  feed$: Observable<GetFeedResponseInterface | null>
  error$: Observable<string | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
  }
}
