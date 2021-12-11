import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import {
  isSubmittingSelector,
  validationErrorsSelector
} from '../../store/selectors/create-article.selectors'
import { ArticleInputInterface } from '../../../shared/interfaces/article-input.interface'
import { BackendErrorsInterface } from '../../../shared/interfaces/backend-errors.interface'
import { createArticleAction } from '../../store/actions/create-article.actions'
import { AppStateInterface } from '../../../shared/interfaces/app-state.interface'

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.sass']
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }

  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }))
  }
}
