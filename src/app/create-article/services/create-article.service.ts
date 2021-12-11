import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'

import { CreateArticleModule } from '../create-article.module'
import { ArticleInputInterface } from '../../shared/interfaces/article-input.interface'
import { ArticleInterface } from '../../shared/interfaces/article.interface'
import { SaveArticleResponseInterface } from '../../shared/interfaces/save-article-response.interface'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: CreateArticleModule
})
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles'

    return this.http
      .post<SaveArticleResponseInterface>(fullUrl, articleInput)
      .pipe(map((response: SaveArticleResponseInterface) => response.article))
  }
}
