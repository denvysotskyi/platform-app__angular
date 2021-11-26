import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './components/feed/feed.component'
import { RouterModule } from '@angular/router'
import { ErrorMessageModule } from '../error-message/error-message.module'
import { LoadingModule } from '../loading/loading.module'

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, RouterModule, ErrorMessageModule, LoadingModule],
  exports: [FeedComponent]
})
export class FeedModule {}
