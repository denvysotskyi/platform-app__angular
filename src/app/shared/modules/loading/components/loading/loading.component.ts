import { Component } from '@angular/core'

@Component({
  selector: 'app-loading',
  template: `
    <div class="image-wrap">
      <div class="image">
        <img src="../../../../../../assets/loading.svg" alt="indicator" />
      </div>
    </div>
  `,
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent {}
