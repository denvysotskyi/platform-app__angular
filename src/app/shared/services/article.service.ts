import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { ArticleModule } from '../../article/article.module'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) {}
}
