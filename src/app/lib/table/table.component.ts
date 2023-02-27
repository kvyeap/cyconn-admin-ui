import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() columns: any[];
  @Input() items: any[];
  @Input() currentPage: number;
  @Input() pageSize: number;
  @Input() totalElements: number;
  @Input() totalPages: number;


  @Output() pageChanged = new EventEmitter<number>();
  @Output() rowClicked = new EventEmitter<{data: any}>();

  onPageChange(pageNumber: number): void {
    this.pageChanged.emit(pageNumber);
  }

}
