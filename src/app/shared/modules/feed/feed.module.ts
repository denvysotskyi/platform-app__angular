import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './components/feed/feed.component'
import { RouterModule } from '@angular/router'
import { ErrorMessageModule } from '../error-message/error-message.module'
import { LoadingModule } from '../loading/loading.module'
import { PaginationModule } from '../pagination/pagination.module'

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule
  ],
  exports: [FeedComponent]
})
export class FeedModule {}
