import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { filter, map, Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector
} from '../../store/selectors/edit-article.selectors'
import { getArticleAction } from '../../store/actions/get-article.actions'
import { createArticleAction } from '../../../create-article/store/actions/create-article.actions'
import { ArticleInputInterface } from '../../../shared/interfaces/article-input.interface'
import { BackendErrorsInterface } from '../../../shared/interfaces/backend-errors.interface'
import { ArticleInterface } from '../../../shared/interfaces/article.interface'

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.sass']
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>
  isLoading$: Observable<boolean>
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>
  slug: string

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList
        }
      })
    )
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }))
  }
}
