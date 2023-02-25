// @ts-nocheck

import {Component, OnInit} from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";
import {CasetimelineService} from "../../core/services/casetimeline.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  user: any;
  dashboard: any = {};
  recentActivities;

  constructor(private userService: UserService,
              private dashboardService: DashboardService,
              private router: Router,
              private casetimelineService: CasetimelineService) {}

  ngOnInit(): void {
    this.user = this.userService.getUserInfo();

    this.dashboardService.getPublicDashboard().subscribe((response) => {
      this.dashboard = response;
    });

    this.casetimelineService.getRecentActivitiesByPublic().subscribe((response) => {
      this.recentActivities = response.result;
    });
  }

  goToSearchCase(caseStatus) {
    sessionStorage.setItem('caseStatus', caseStatus);
    this.router.navigate(['/home/searchcase']);
  }

  goToCreateCase(mcmcRelatedComplaints) {
    sessionStorage.setItem('mcmcRelatedComplaints', mcmcRelatedComplaints);
    this.router.navigate(['/home/newcase']);
  }
}
