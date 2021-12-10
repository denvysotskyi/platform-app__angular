import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.sass']
})
export class CreateArticleComponent implements OnInit {
  initialValues = {
    title: 'default title',
    description: 'default description',
    body: 'default body',
    tagList: ['default taglist']
  }

  constructor() {}

  ngOnInit(): void {}

  onSubmit(res: any): void {
    console.log('Submit in parent >>', res)
  }
}
