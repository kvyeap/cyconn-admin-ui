import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'lib-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input() breadcrumbItems;
  @Input() title: string;

  // @Output() updateBreadcrumbs = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void { // Handling input changes
    if (changes.breadcrumbItems && changes.breadcrumbItems.currentValue) {
      this.breadcrumbItems = changes.breadcrumbItems.currentValue;
      this.breadcrumbItems[this.breadcrumbItems.length - 1].active = true;
    }
  }

  goTo(page) {
    this.router.navigate([page.url]).then(navSuccess => {
      // if (navSuccess) {
      //   this.updateBreadcrumbs.emit(page.url);
      // }
    });
  }

}
