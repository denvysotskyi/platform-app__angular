import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { EditArticleComponent } from './components/edit-article/edit-article.component'
import { ArticleService as SharedArticleService } from '../shared/services/article.service'

@NgModule({
  declarations: [EditArticleComponent],
  imports: [CommonModule],
  providers: [SharedArticleService]
})
export class EditArticleModule {}
