import { Component, Input, OnInit } from '@angular/core'

import { ArticleInputInterface } from '../../../../interfaces/article-input.interface'
import { BackendErrorsInterface } from '../../../../interfaces/backend-errors.interface'

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.sass']
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null

  constructor() {}

  ngOnInit(): void {}
}
