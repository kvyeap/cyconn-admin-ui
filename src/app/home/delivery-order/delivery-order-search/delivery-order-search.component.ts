import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../../core/services/customer.service';
import {SpinnerVisibilityService} from 'ng-http-loader';
import {SweetAlertService} from '../../../core/services/sweetalert.service';

@Component({
  selector: 'app-delivery-order-search',
  templateUrl: './delivery-order-search.component.html',
  styleUrls: ['./delivery-order-search.component.scss']
})
export class DeliveryOrderSearchComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private spinner: SpinnerVisibilityService,
              private sweetAlertService: SweetAlertService,
              private customerService: CustomerService) {
  }

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
    this.router.navigate([item.data.uuid], {relativeTo: this.activatedRoute});
  }


}
