import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { ArticleModule } from '../article.module'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: ArticleModule
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  deleteArticle(slug: string): Observable<{}> {
    const url = `${environment.apiUrl}/articles/${slug}`

    return this.http.delete<{}>(url)
  }
}
