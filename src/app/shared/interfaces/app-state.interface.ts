import { AuthStateInterface } from '../../auth/interfaces/auth-state.interface'
import { FeedStateInterface } from '../modules/feed/interfaces/feed-state.interface'
import { PopularTagsStateInterface } from '../modules/popular-tags/interfaces/popular-tags-state.interface'
import { ArticleStateInterface } from '../../article/interfaces/article-state.interface'
import { CreateArticleStateInterface } from '../../create-article/interfaces/create-article-state.interface'
import { EditArticleStateInterface } from '../../edit-article/interfaces/edit-article-state.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
  tags: PopularTagsStateInterface
  article: ArticleStateInterface
  create: CreateArticleStateInterface
  edit: EditArticleStateInterface
}
