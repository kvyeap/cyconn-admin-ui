import {Component, Input} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'lib-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent {

  env = environment;

  @Input() blog: any;

}
