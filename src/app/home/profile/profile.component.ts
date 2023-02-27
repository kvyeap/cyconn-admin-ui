import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  statData;
  alertData: any;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: '' }, { label: 'Company Profile', active: true }];

    this.alertData = [];
    this.alertData.push("Please complete your company profile!");
  }

  close(alert: string, alertData:string[]) {
    this.alertData.splice(alertData.indexOf(alert), 1);
  }

}
