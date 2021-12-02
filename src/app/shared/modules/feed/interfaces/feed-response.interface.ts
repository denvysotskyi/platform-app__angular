import { ArticleInterface } from '../../../interfaces/article.interface'

export interface FeedResponseInterface {
  articles: ArticleInterface[]
  articlesCount: number
}
