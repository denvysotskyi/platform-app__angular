import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { GlobalFeedComponent } from './components/global-feed/global-feed.component'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module'
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module'

const routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
]

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    PopularTagsModule,
    FeedTogglerModule
  ]
})
export class GlobalFeedModule {}
