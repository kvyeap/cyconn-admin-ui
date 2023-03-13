import {Component, Input, OnInit} from '@angular/core';
import {customerResponse} from '../../../mock/customerResponse';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../../core/services/customer.service';
import {SpinnerVisibilityService} from 'ng-http-loader';
import {SweetAlertService} from '../../../core/services/sweetalert.service';
import {ProductService} from '../../../core/services/product.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public activeModal: NgbActiveModal,
              private spinner: SpinnerVisibilityService,
              private sweetAlertService: SweetAlertService,
              private customerService: CustomerService) {
  }

  @Input() isModal: boolean;
  items: any[];
  tableColumns = [
    {title: 'Customer Name', key: 'name'},
    {title: 'Code', key: 'code'},
  ];
  currentPage: number = 0;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  form = new FormGroup({
    searchText: new FormControl(''),
    currentPage: new FormControl(0),
  });

  ngOnInit(): void {
    this.doSearch();
  }

  doSearch(): void {
    this.onPageChanged(0);
  }

  onPageChanged(pageNumber: number) {
    this.spinner.show();

    if (pageNumber > 0) {
      pageNumber = pageNumber - 1;
    } else {
      pageNumber = 0;
    }

    this.form.patchValue({
      currentPage: pageNumber
    });

    this.customerService.searchCustomer(this.form).subscribe(response => {
      this.spinner.hide();
      if (response.isSuccess) {
        this.items = response.result.content;
        this.currentPage = response.result.number;
        this.totalElements = response.result.totalElements;
        this.totalPages = response.result.totalPages;
        this.pageSize = response.result.size;
      } else {
        this.sweetAlertService.showError(response.result.message);
      }
    })

  }

  onSelectedRow(item: any) {
    if (this.isModal) {
      this.activeModal.close(item);
    } else {
      this.router.navigate([item.data.uuid], {relativeTo: this.activatedRoute});
    }
  }


}
