import { Component, Input } from '@angular/core'
import { TagType } from '../../../../types/tag.type'

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.sass']
})
export class TagListComponent {
  @Input('tags') tagsProps: TagType[] | null
}
