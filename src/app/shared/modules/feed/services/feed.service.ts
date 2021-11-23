import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { GetFeedResponseInterface } from '../interfaces/get-feed-response.interface'

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  getFeed(url: string): Observable<GetFeedResponseInterface> {
    return null
  }
}
