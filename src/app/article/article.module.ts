import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ArticleComponent } from './components/article/article.component'
import { RouterModule } from '@angular/router'
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module'
import { LoadingModule } from '../shared/modules/loading/loading.module'

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, RouterModule, ErrorMessageModule, LoadingModule]
})
export class ArticleModule {}
