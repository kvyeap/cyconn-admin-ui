import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AnnouncementService} from '../../core/services/announcement.service';
import {OrganizationService} from '../../core/services/organization.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BlogContentComponent} from '../../shared/ui/blog-content/blog-content.component';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('slide', [
      state('previous', style({transform: 'translateX(-100%)'})),
      state('current', style({transform: 'translateX(0)'})),
      state('next', style({transform: 'translateX(100%)'})),
      transition('* => previous', animate('300ms ease-out')),
      transition('* => next', animate('300ms ease-out'))
    ])
  ]

})
export class MainPageComponent implements OnInit {

  constructor(private announcementService: AnnouncementService,
              private organizationService: OrganizationService,
              private ngbModal: NgbModal) {
  }
  env = environment;
  mcmcAnnouncementList: any[];
  mcmcAnnouncementListCurrentIndex = 0;
  serviceProviderList = [];
  faqList = [];
  serviceIncidentAnnouncementList = [];
  isHovering: boolean = false;
  selectedServiceProvider: any;

  get currentItem(): string {
    return this.mcmcAnnouncementList[this.mcmcAnnouncementListCurrentIndex];
  }

  get previousItem(): string {
    return this.mcmcAnnouncementList[this.previousIndex];
  }

  get nextItem(): string {
    return this.mcmcAnnouncementList[this.nextIndex];
  }

  get previousIndex(): number {
    return (this.mcmcAnnouncementListCurrentIndex - 1 + this.mcmcAnnouncementList.length) % this.mcmcAnnouncementList.length;
  }

  get nextIndex(): number {
    return (this.mcmcAnnouncementListCurrentIndex + 1) % this.mcmcAnnouncementList.length;
  }

  slide(direction: 'previous' | 'next'): void {
    if (direction === 'previous') {
      this.mcmcAnnouncementListCurrentIndex = this.mcmcAnnouncementListCurrentIndex === 0 ? this.mcmcAnnouncementList.length - 1 : this.mcmcAnnouncementListCurrentIndex - 1;
    } else {
      this.mcmcAnnouncementListCurrentIndex = this.mcmcAnnouncementListCurrentIndex === this.mcmcAnnouncementList.length - 1 ? 0 : this.mcmcAnnouncementListCurrentIndex + 1;
    }
  }

  toggleHover(isHovering: boolean) {
    this.isHovering = isHovering;
  }

  openModal(uuid: string, type: string) {
    const modalRef = this.ngbModal.open(BlogContentComponent, { size: 'lg'});
    switch (type) {
      case 'mcmc':
        this.announcementService.getMCMCAnnouncementByUuid(uuid).subscribe(data => {
          console.log(data)
          modalRef.componentInstance.blog = data.result;
          modalRef.componentInstance.blog.type = 'MCMC Announcement';
        })
        break;
      case 'faq':
        this.announcementService.getFaqAnnouncementByUuid(uuid).subscribe(data => {
          console.log(data)
          modalRef.componentInstance.blog = data.result;
          modalRef.componentInstance.blog.type = 'Frequently Asked Question';
        })
        break;
    }
  }

  serviceProviderCarousel: OwlOptions = {
    items: 1,
    loop: false,
    margin: 5,
    nav: true,
    navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
    dots: false,
    responsive: {
      672: {
        items: 10
      },

      576: {
        items: 14
      },

      936: {
        items: 17
      },
    }
  }

  serviceIncidentAnnouncementCarousel: OwlOptions = {
    items: 1,
    loop: false,
    margin: 5,
    dots: true,
    responsive: {
      672: {
        items: 2
      },

      576: {
        items: 2
      },

      936: {
        items: 3
      },
    }
  }

  ngOnInit(): void {
    this.announcementService.getMCMCAnnouncement().subscribe(data => {
      console.log(data)
      if (data.isSuccess) {
        this.mcmcAnnouncementList = data.result;
      } else {
        console.error(data);
      }
    });

    this.announcementService.getFaqAnnouncement().subscribe(data => {
      console.log(data)
      if (data.isSuccess) {
        this.faqList = data.result;
      } else {
        console.error(data);
      }
    });

    // this.organizationService.getServiceProvider().subscribe(data => {
    //   console.log(data)
    //   if (data.isSuccess) {
    //     this.serviceProviderList = data.result;
    //   } else {
    //     console.error(data);
    //   }
    // });

    setInterval(() => {
      this.slide('next');
    }, 3000);

    for (let i = 0; i < 30; i++) {
      let serviceProvider = null;
      switch (i) {
        case 0:
          serviceProvider = {
            name: 'ABX Express',
            img: 'assets/images/icms/serviceproviders/ABXExpress.png'
          }
          break;
        case 1:
          serviceProvider = {
            name: 'Aramex',
            img: 'assets/images/icms/serviceproviders/Aramex.png'
          }
          break;
        case 2:
          serviceProvider = {
            name: 'Astro',
            img: 'assets/images/icms/serviceproviders/Astro.png'
          }
          break;
        case 3:
          serviceProvider = {
            name: 'Best Express',
            img: 'assets/images/icms/serviceproviders/BestExpress.png'
          }
          break;
        case 4:
          serviceProvider = {
            name: 'BFM',
            img: 'assets/images/icms/serviceproviders/BFM.png'
          }
          break;
        case 5:
          serviceProvider = {
            name: 'Celcom',
            img: 'assets/images/icms/serviceproviders/Celcom.png'
          }
          break;
        case 6:
          serviceProvider = {
            name: 'City-Link Express',
            img: 'assets/images/icms/serviceproviders/City-LinkExpress.jfif'
          }
          break;
        case 7:
          serviceProvider = {
            name: 'CJ Logistic',
            img: 'assets/images/icms/serviceproviders/CJLogistic.jfif'
          }
          break;
        case 8:
          serviceProvider = {
            name: 'Digi',
            img: 'assets/images/icms/serviceproviders/Digi.png'
          }
          break;
        case 9:
          serviceProvider = {
            name: 'Fedex',
            img: 'assets/images/icms/serviceproviders/Fedex.png'
          }
          break;
        case 10:
          serviceProvider = {
            name: 'GDex',
            img: 'assets/images/icms/serviceproviders/GDex.png'
          }
          break;
        case 11:
          serviceProvider = {
            name: 'J&T',
            img: 'assets/images/icms/serviceproviders/JNT.png'
          }
          break;
        case 12:
          serviceProvider = {
            name: 'Lazda Express',
            img: 'assets/images/icms/serviceproviders/LazdaExpress.png'
          }
          break;
        case 13:
          serviceProvider = {
            name: 'Maxis',
            img: 'assets/images/icms/serviceproviders/Maxis.png'
          }
          break;
        case 14:
          serviceProvider = {
            name: 'Media Prima',
            img: 'assets/images/icms/serviceproviders/MediaPrima.png'
          }
          break;
        case 15:
          serviceProvider = {
            name: 'Myeg',
            img: 'assets/images/icms/serviceproviders/Myeg.png'
          }
          break;
        case 16:
          serviceProvider = {
            name: 'NinjaVan',
            img: 'assets/images/icms/serviceproviders/NinjaVan.png'
          }
          break;
        case 17:
          serviceProvider = {
            name: 'parcelhub',
            img: 'assets/images/icms/serviceproviders/parcelhub.jpg'
          }
          break;
        case 18:
          serviceProvider = {
            name: 'pgeon',
            img: 'assets/images/icms/serviceproviders/pgeon.png'
          }
          break;
        case 19:
          serviceProvider = {
            name: 'Pos MY',
            img: 'assets/images/icms/serviceproviders/PosMY.png'
          }
          break;
        case 20:
          serviceProvider = {
            name: 'redfm',
            img: 'assets/images/icms/serviceproviders/redfm.jpg'
          }
          break;
        case 21:
          serviceProvider = {
            name: 'RedOne',
            img: 'assets/images/icms/serviceproviders/RedOne.png'
          }
          break;
        case 22:
          serviceProvider = {
            name: 'sf global express',
            img: 'assets/images/icms/serviceproviders/sfglobalexpress.jpg'
          }
          break;
        case 23:
          serviceProvider = {
            name: 'shopeexpress',
            img: 'assets/images/icms/serviceproviders/shopeexpress.png'
          }
          break;
        case 24:
          serviceProvider = {
            name: 'skynet',
            img: 'assets/images/icms/serviceproviders/skynet.jpg'
          }
          break;
        case 25:
          serviceProvider = {
            name: 'suriafm',
            img: 'assets/images/icms/serviceproviders/suriafm.png'
          }
          break;
        case 26:
          serviceProvider = {
            name: 'TimedotCom',
            img: 'assets/images/icms/serviceproviders/TimedotCom.jfif'
          }
          break;
        case 27:
          serviceProvider = {
            name: 'TM',
            img: 'assets/images/icms/serviceproviders/TM.png'
          }
          break;
        case 28:
          serviceProvider = {
            name: 'Tunetalk',
            img: 'assets/images/icms/serviceproviders/Tunetalk.png'
          }
          break;
        case 29:
          serviceProvider = {
            name: 'Yes',
            img: 'assets/images/icms/serviceproviders/Yes.png'
          }
          break;
        default:
          break;
      }
      this.serviceProviderList.push(serviceProvider);
    }
    this.selectedServiceProvider = 'Maxis';
    this.updateServiceIncident(this.selectedServiceProvider);
  }

  onSelectServiceProviderImageItem(name: string) {
    this.selectedServiceProvider = name;
    this.updateServiceIncident(this.selectedServiceProvider);
  }

  updateServiceIncident(serviceProvider: string) {
    this.serviceIncidentAnnouncementList = [];
    for (let i = 0; i < 5; i++) {
      let serviceIncidentAnnouncement = {
        serviceProvider: serviceProvider,
        title: 'SCHEDULE NETWORK MAINTENANCE',
        location: 'Wilayah Persekutuan Kuala Lumpur',
        datetime: '10 December 2022 Friday | 9AM - 10AM'
      }
      this.serviceIncidentAnnouncementList.push(serviceIncidentAnnouncement);
    }
  }

}
