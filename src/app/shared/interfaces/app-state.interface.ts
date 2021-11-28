import { AuthStateInterface } from '../../auth/interfaces/auth-state.interface'
import { FeedStateInterface } from '../modules/feed/interfaces/feed-state.interface'
import { PopularTagsStateInterface } from '../modules/popular-tags/interfaces/popular-tags-state.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
  tags: PopularTagsStateInterface
}
