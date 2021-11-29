import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { getPopularTagsAction } from '../../store/actions/get-popular-tags-actions'
import {
  errorSelector,
  isLoadingSelector,
  tagsSelector
} from '../../store/selectors/tags-selectors'
import { TagType } from '../../../../types/tag.type'

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.sass']
})
export class PopularTagsComponent implements OnInit {
  isLoading$: Observable<boolean>
  popularTags$: Observable<TagType[] | null>
  error$: Observable<string | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.popularTags$ = this.store.pipe(select(tagsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction())
  }
}
