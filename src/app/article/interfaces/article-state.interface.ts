import { ArticleInterface } from '../../shared/interfaces/article.interface'

export interface ArticleStateInterface {
  isLoading: boolean
  data: ArticleInterface | null
  error: string | null
  isAuthor: boolean
}
