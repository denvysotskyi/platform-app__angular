import { Component } from '@angular/core'

@Component({
  selector: 'app-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.sass']
})
export class YourFeedComponent {
  apiUrl = '/articles/feed'
}
