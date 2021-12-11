import { BackendErrorsInterface } from '../../shared/interfaces/backend-errors.interface'

export interface CreateArticleStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
