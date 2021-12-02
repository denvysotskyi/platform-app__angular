import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { FeedModule } from '../feed.module'
import { FeedResponseInterface } from '../interfaces/feed-response.interface'
import { environment } from '../../../../../environments/environment'

@Injectable({
  providedIn: FeedModule
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<FeedResponseInterface> {
    const fullUrl = environment.apiUrl + url

    return this.http.get<FeedResponseInterface>(fullUrl)
  }
}
