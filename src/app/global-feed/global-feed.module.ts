import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { GlobalFeedComponent } from './components/global-feed.component'

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule],
  exports: [GlobalFeedComponent]
})
export class GlobalFeedModule {}
