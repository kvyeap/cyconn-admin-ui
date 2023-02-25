// @ts-nocheck

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseSearchService } from 'src/app/core/services/casesearch.service';
import {SpinnerVisibilityService} from "ng-http-loader";

@Component({
  selector: 'app-searchcase',
  templateUrl: './searchcase.component.html',
  styleUrls: ['./searchcase.component.scss']
})
export class SearchcaseComponent implements OnInit{

  searchResult: any = {};
  totalResult = null;

  selectedStatus: string = 'all';
  searchText: string = '';

  isSortByNewest = true;

  searchCondition: any = {
    searchText: '',
    status: '',
    sortBy: 'created_date',
    sortOrder: 'ASC'
  }

  constructor(
    private caseSearchService: CaseSearchService,
    private router: Router,
    private spinner: SpinnerVisibilityService
    ) {
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('caseStatus') != null && sessionStorage.getItem('caseStatus') != ''){
      this.doSelectStatus(sessionStorage.getItem('caseStatus'));
      sessionStorage.removeItem('caseStatus');
    }
    else {
      this.doSearch();
    }
  }

  doSelectStatus(currentStatus) {
    this.selectedStatus = currentStatus;
    this.searchCondition.status = this.selectedStatus;
    this.searchCondition.searchText = this.searchText;

    this.doSearch();
  }

  doSearchByText() {
    this.searchCondition.searchText = this.searchText;

    this.doSearch();
  }

  doSort(sortBy) {
    if (sortBy == 'newest') {
     this.isSortByNewest = false;
     this.searchCondition.sortOrder = 'desc';
    }

    if (sortBy == 'oldest') {
      this.isSortByNewest = true;
      this.searchCondition.sortOrder = 'asc';
    }

    this.searchCondition.sortBy = 'created_date';
    this.doSearch();
  }

  doSearch() {
    console.log(this.searchCondition);

    this.spinner.show();
    this.caseSearchService.doCaseSearch(this.searchCondition).subscribe((response) => {
      this.spinner.hide();
      console.log(response);
      this.searchResult = response.content;
      this.totalResult = response.totalResult;
    });
  }

  doGoCaseDetail(caseId) {
    this.router.navigate(['/home/casedetails', caseId]);
  }


}
