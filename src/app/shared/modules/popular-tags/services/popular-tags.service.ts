import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'

import { TagType } from '../../../types/tag.type'
import { environment } from '../../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<TagType[] | null> {
    const fullUrl = environment.apiUrl + '/tags'

    return this.http.get<TagType[] | null>(fullUrl).pipe(
      map((res: any) => {
        return res.tags
      })
    )
  }
}
