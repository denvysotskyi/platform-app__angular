import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'

import { ArticleInterface } from '../interfaces/article.interface'
import { ArticleResponseInterface } from 'src/app/shared/interfaces/article-response.interface'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`

    return this.http
      .get<ArticleResponseInterface>(fullUrl)
      .pipe(map((response: ArticleResponseInterface) => response.article))
  }
}
