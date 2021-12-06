import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { combineLatest, Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'

import {
  deleteArticleAction,
  getArticleAction
} from '../../store/actions/article.actions'
import { ArticleInterface } from 'src/app/shared/interfaces/article.interface'
import {
  articleSelector,
  errorSelector,
  isLoadingSelector
} from '../../store/selectors/article.selectors'
import { currentUserSelector } from '../../../auth/store/selectors/auth.selectors'
import { CurrentUserInterface } from '../../../shared/interfaces/current-user.interface'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string
  isLoading$: Observable<boolean>
  article: ArticleInterface | null
  articleSubscription: Subscription
  error$: Observable<string | null>
  isAuthor$: Observable<boolean>

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.error$ = this.store.pipe(select(errorSelector))
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null
        ]) => {
          if (!article || !currentUser) {
            return false
          }
          return article.author.username === currentUser.username
        }
      )
    )
  }

  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article
      })
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }))
  }
}
