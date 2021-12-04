import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { ArticleComponent } from './components/article/article.component'
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module'
import { LoadingModule } from '../shared/modules/loading/loading.module'
import { TagListModule } from '../shared/modules/tag-list/tag-list.module'

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
    TagListModule
  ]
})
export class ArticleModule {}
