import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'

import { environment } from '../../../../../environments/environment'
import { GetPopularTagsResponseInterface } from '../interfaces/get-popular-tags-response.interface'

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<string[]> {
    const fullUrl = environment.apiUrl + '/tags'

    return this.http.get<GetPopularTagsResponseInterface>(fullUrl).pipe(
      map((res: GetPopularTagsResponseInterface) => {
        return res.tags
      })
    )
  }
}
