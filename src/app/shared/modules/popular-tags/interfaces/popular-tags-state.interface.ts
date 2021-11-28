import { PopularTagType } from '../../../types/popular-tag.type'

export interface PopularTagsStateInterface {
  isLoading: boolean
  data: PopularTagType[] | null
  error: string | null
}
