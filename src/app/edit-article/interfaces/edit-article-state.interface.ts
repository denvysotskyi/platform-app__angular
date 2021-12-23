import { BackendErrorsInterface } from '../../shared/interfaces/backend-errors.interface'
import { ArticleInterface } from '../../shared/interfaces/article.interface'

export interface EditArticleStateInterface {
  isLoading: boolean
  article: ArticleInterface | null
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
