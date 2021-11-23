import { GetFeedResponseInterface } from './get-feed-response.interface'

export interface FeedStateInterface {
  isLoading: boolean
  data: GetFeedResponseInterface | null
  error: string | null
}
