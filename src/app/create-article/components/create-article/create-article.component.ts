import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.sass']
})
export class CreateArticleComponent implements OnInit {
  initialValues = {
    body: 'default body',
    description: 'default description',
    tagList: ['default taglist'],
    title: 'default title'
  }

  constructor() {}

  ngOnInit(): void {}

  onSubmit(res: any): void {
    console.log('Submit in parent >>', res)
  }
}
