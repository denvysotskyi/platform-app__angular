import { TagType } from '../../../types/tag.type'

export interface PopularTagsStateInterface {
  isLoading: boolean
  data: TagType[] | null
  error: string | null
}
