import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SideBarComponent } from './components/side-bar.component'

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule],
  exports: [SideBarComponent]
})
export class SideBarModule {}
