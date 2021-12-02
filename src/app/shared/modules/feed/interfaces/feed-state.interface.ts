import { FeedResponseInterface } from './feed-response.interface'

export interface FeedStateInterface {
  isLoading: boolean
  data: FeedResponseInterface | null
  error: string | null
}
