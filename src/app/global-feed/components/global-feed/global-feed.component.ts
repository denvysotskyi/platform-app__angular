import { Component } from '@angular/core'

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.sass']
})
export class GlobalFeedComponent {
  apiUrl = '/articles'
}
