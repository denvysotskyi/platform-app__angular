import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-error-message',
  template: `
    <div class="error-wrap">
      <p>
        {{ messageProps }}
      </p>
    </div>
  `,
  styles: [
    `.error-wrap
       width: 211px
       border: 1px solid var(--error-color)
       border-radius: 10px
       padding: 20px
       margin-bottom: 15px
       p
         color: var(--error-color)
         font-size: 20px
    `
  ]
})
export class ErrorMessageComponent {
  @Input('message') messageProps: string = 'Произошли ошибки'
}
