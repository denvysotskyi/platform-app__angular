import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps: number
  @Input('limit') limitProps: number
  @Input('url') urlProps: string
  @Input('currentPage') currentPageProps: number

  constructor() {}

  ngOnInit(): void {}
}
