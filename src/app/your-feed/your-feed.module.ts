import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { YourFeedComponent } from './components/your-feed/your-feed.component'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module'
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module'

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent
  }
]

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    PopularTagsModule,
    FeedTogglerModule
  ]
})
export class YourFeedModule {}
