import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { GlobalFeedComponent } from './components/global-feed.component'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { SideBarModule } from '../shared/modules/side-bar/side-bar.module'

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
    SideBarModule
  ]
})
export class GlobalFeedModule {}
