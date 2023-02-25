import { Component } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent {

  goTo(link: string) {
    window.open(link, '_blank');
  }
}
