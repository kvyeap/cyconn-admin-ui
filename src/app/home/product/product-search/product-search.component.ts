import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../core/services/product.service';
import {SweetAlertService} from '../../../core/services/sweetalert.service';
import {SpinnerVisibilityService} from 'ng-http-loader';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private spinner: SpinnerVisibilityService,
              private sweetAlertService: SweetAlertService,
              private productService: ProductService) {
  }

  items: any[];
  tableColumns = [
    {title: 'Product Name', key: 'name'},
    {title: 'Product Code', key: 'code'},
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

    this.productService.doSearch(this.form).subscribe(response => {
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
