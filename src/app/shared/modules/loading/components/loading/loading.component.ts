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
  styles: [
    `.image-wrap
        display: flex
        justify-content: center
        .image
          width: 175px
          height: 175px
`
  ]
})
export class LoadingComponent {}
