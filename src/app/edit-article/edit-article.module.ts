import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { EditArticleComponent } from './components/edit-article/edit-article.component'
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module'
import { LoadingModule } from '../shared/modules/loading/loading.module'

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent
  }
]

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    LoadingModule
  ]
})
export class EditArticleModule {}
