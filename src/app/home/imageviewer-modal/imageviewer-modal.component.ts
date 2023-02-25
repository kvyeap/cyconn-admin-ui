import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-imageviewer-modal',
  templateUrl: './imageviewer-modal.component.html',
  styleUrls: ['./imageviewer-modal.component.scss']
})
export class ImageviewerModalComponent {

  @Input() src;
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
