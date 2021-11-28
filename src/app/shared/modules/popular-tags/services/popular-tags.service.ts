import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'

import { PopularTagType } from '../../../types/popular-tag.type'
import { environment } from '../../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[] | null> {
    const fullUrl = environment.apiUrl + '/tags'

    return this.http.get<PopularTagType[] | null>(fullUrl).pipe(
      map((res: any) => {
        return res.tags
      })
    )
  }
}
