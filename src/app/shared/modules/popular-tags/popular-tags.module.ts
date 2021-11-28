import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PopularTagsComponent } from './components/popular-tags/popular-tags.component'
import { LoadingModule } from '../loading/loading.module'
import { ErrorMessageModule } from '../error-message/error-message.module'

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [CommonModule, RouterModule, LoadingModule, ErrorMessageModule],
  exports: [PopularTagsComponent]
})
export class PopularTagsModule {}
