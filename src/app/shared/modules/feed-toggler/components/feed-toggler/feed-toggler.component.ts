import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { TagType } from '../../../../types/tag.type'
import { isLoggedInSelector } from '../../../../../auth/store/selectors/auth.selectors'

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.sass']
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: TagType | null

  isLoggedIn$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
