import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'

import { PopularTagsModule } from '../popular-tags.module'
import { TagType } from '../../../types/tag.type'
import { environment } from '../../../../../environments/environment'

@Injectable({
  providedIn: PopularTagsModule
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<TagType[] | null> {
    const fullUrl = environment.apiUrl + '/tags'

    return this.http
      .get<TagType[] | null>(fullUrl)
      .pipe(map((res: any) => res.tags))
  }
}
