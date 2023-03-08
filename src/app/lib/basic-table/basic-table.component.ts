import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent {
  @Input() columns: any[];
  @Input() items: any[];
  @Input() currentPage: number;
  @Input() pageSize: number;
  @Input() totalElements: number;
  @Input() totalPages: number;

  @Output() pageChanged = new EventEmitter<number>();
  @Output() rowClicked = new EventEmitter<{ data: any }>();


  onPageChange(pageNumber: number): void {
    this.pageChanged.emit(pageNumber);
  }

  onRowClicked(item: any): void {
    this.rowClicked.emit({data: item});
  }


}
