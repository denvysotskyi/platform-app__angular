import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { EditArticleModule } from '../edit-article.module'
import { ArticleInputInterface } from '../../shared/interfaces/article-input.interface'
import { ArticleInterface } from '../../shared/interfaces/article.interface'
import { environment } from '../../../environments/environment'
import { SaveArticleResponseInterface } from '../../shared/interfaces/save-article-response.interface'

@Injectable({
  providedIn: EditArticleModule
})
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`

    return this.http
      .put<SaveArticleResponseInterface>(fullUrl, articleInput)
      .pipe(map((response: SaveArticleResponseInterface) => response.article))
  }
}
