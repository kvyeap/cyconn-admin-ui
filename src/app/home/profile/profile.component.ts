// @ts-nocheck

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SweetAlertService} from '../../core/services/sweetalert.service';
import {UserService} from '../../core/services/user.service';
import {AuthenticationService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SpinnerVisibilityService} from "ng-http-loader";
import {OsmService} from "../../core/services/osm.service";
import {JendelaService} from "../../core/services/jendela.service";
import {CommonitemService} from "../../core/services/commonitem.service";
import {DatePipe} from "@angular/common";

const datepipe: DatePipe = new DatePipe('en-US')

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileInfo: any;
  selectedFile: File;
  base64Image: string;

  isEmailVerified: boolean;
  isMobileVerified: boolean;
  selectedLocationType: string;
  selectedBuildingType: string;
  formSubmit: boolean = false;

  sentTAC: boolean = false;
  countdownMessage: string = '';
  countdown: number = 0;
  intervalId: any;

  lastUpdatedDate: string;

  salutationList = [];

  formSubmitted: boolean = false;

  constructor(private sweetAlertService: SweetAlertService,
              private userService: UserService,
              private authService: AuthenticationService,
              private router: Router,
              private modalService: NgbModal,
              private spinner: SpinnerVisibilityService,
              private osmService: OsmService,
              private jendelaService: JendelaService,
              private commonItemService: CommonitemService) {
  }

  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    salutation: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    isCitizen: new FormControl(null, [Validators.required]),
    dateOfBirth: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    nricPassportNo: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    mobileNo: new FormControl(null, [Validators.pattern(/^[01]\d{9,10}$/)]),
    locationType: new FormControl(null, [Validators.required]),
    buildingType: new FormControl(null, [Validators.required]),
    buildingName: new FormControl(null),
    lot: new FormControl(null),
    unitNo: new FormControl(null, [Validators.required]),
    floorNo: new FormControl(null),
    block: new FormControl(null),
    street: new FormControl(null, [Validators.required]),
    section: new FormControl(null),
    landmark: new FormControl(null),
    postcode: new FormControl(null, [Validators.required, Validators.pattern(/^\d{5}$/)]),
    latitude: new FormControl(null),
    longitude: new FormControl(null),
    cityName: new FormControl(null, [Validators.required]),
    cityCode: new FormControl(null),
    districtName: new FormControl(null, [Validators.required]),
    districtCode: new FormControl(null),
    parliamentName: new FormControl(null),
    parliamentCode: new FormControl(null),
    stateName: new FormControl(null, [Validators.required]),
    stateCode: new FormControl(''),
    image: new FormControl(null)
  });


  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.form.patchValue({
        image: <string>reader.result
      })

    };
  }

  resetImage() {
    this.selectedFile = null;
    this.base64Image = null;
  }

  uploadImage() {
    this.userService.saveProfileImage(this.form).subscribe(data => {
      if (data.isSuccess) {
        this.sweetAlertService.showSuccess('Profile Image Updated Successfully');
        this.userService.loadUserInfo();
        this.reloadCurrentPage();
      } else {
        console.err(data)
      }
    });
  }

  ngOnInit(): void {
    this.commonItemService.getSalutations().subscribe((response) => {
        this.salutationList = response.result;
      }
    );

    this.userService.getProfile().subscribe(data => {
      console.log(data)
      if (data.isSuccess) {
        this.profileInfo = data.result;
        this.form.setValue({
          name: this.profileInfo.name,
          salutation: this.profileInfo.salutation,
          gender: this.profileInfo.gender,
          dateOfBirth: this.profileInfo.dateOfBirth ? datepipe.transform(this.profileInfo.dateOfBirth, 'yyyy-MM-dd') : null,
          age: this.profileInfo.age,
          isCitizen: this.profileInfo.isCitizen.toString(),
          nricPassportNo: this.profileInfo.nricPassportNo,
          email: this.profileInfo.email,
          mobileNo: this.profileInfo.mobileNo,
          locationType: this.profileInfo.locationType,
          buildingType: this.profileInfo.buildingType,
          buildingName: this.profileInfo.buildingName,
          lot: this.profileInfo.lot,
          unitNo: this.profileInfo.unitNo,
          floorNo: this.profileInfo.floorNo,
          block: this.profileInfo.block,
          street: this.profileInfo.street,
          section: this.profileInfo.section,
          landmark: this.profileInfo.landmark,
          postcode: this.profileInfo.postcode,
          latitude: this.profileInfo.latitude,
          longitude: this.profileInfo.longitude,
          cityName: this.profileInfo.cityName,
          cityCode: this.profileInfo.cityCode,
          districtName: this.profileInfo.districtName,
          districtCode: this.profileInfo.districtCode,
          parliamentName: this.profileInfo.parliamentName,
          parliamentCode: this.profileInfo.parliamentCode,
          stateName: this.profileInfo.stateName,
          stateCode: this.profileInfo.stateCode,
          image: this.profileInfo.image
        });
        this.form.controls['age'].disable();
        this.form.controls['isCitizen'].disable();
        this.form.controls['nricPassportNo'].disable();

        if (this.profileInfo.isEmailVerified) {
          this.isEmailVerified = this.profileInfo.isEmailVerified;
          this.form.controls['email'].disable();
        }
        // if (this.profileInfo.isMobileVerified) {
        //   this.isMobileVerified = this.profileInfo.isMobileVerified;
        //   this.form.controls['mobileNo'].disable();
        // }
        if (this.profileInfo.lastUpdatedDate) {
          this.lastUpdatedDate = this.profileInfo.lastUpdatedDate;
        }

        this.form.controls['mobileNo'].disable();
        this.form.controls['cityName'].disable();
        this.form.controls['districtName'].disable();
        this.form.controls['stateName'].disable();
        this.form.controls['latitude'].disable();
        this.form.controls['longitude'].disable();
      }
    })
  }

  onLocationTypeChange(value: any) {
    this.selectedLocationType = value;
  }

  onBuildingTypeChange(value: any) {
    this.selectedBuildingType = value;
  }

  doSubmit() {
    this.formSubmitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.form.controls['isCitizen'].enable();
      this.form.controls['nricPassportNo'].enable();
      this.form.controls['email'].enable();
      this.form.controls['mobileNo'].enable();
      this.form.controls['cityName'].enable();
      this.form.controls['districtName'].enable();
      this.form.controls['stateName'].enable();
      this.form.controls['dateOfBirth'].setValue(new Date(this.form.controls['dateOfBirth'].value))
      this.spinner.show();
      // form is valid, do what you need to do with the form data
      this.userService.saveProfile(this.form).subscribe(data => {
        this.spinner.hide();
        if (data.isSuccess) {
          this.userService.loadUserInfo();
          this.sweetAlertService.showSuccess('PAGE_REGISTER.UPDATE_SUCCESSFUL');
          this.reloadCurrentPage();
        } else {
          console.error(data);
          this.sweetAlertService.showError(data.result.code);
        }
      });
    } else {
      // form is invalid, highlight the invalid fields
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({onlySelf: true});
      });
    }
  }

  verifyEmail() {
    if (this.form.get('email').valid) {
      this.spinner.show();
      this.authService.requestVerifyLink(this.form).subscribe(data => {
        this.spinner.hide();
        if (data.isSuccess) {
          this.sweetAlertService.showInfo('Verification Link Sent', 'Please check your email inbox for the email verification steps.');
        } else {
          this.sweetAlertService.showError(data.result.code);
        }
      })
    }
  }

  // verifyMobile() {
  //   if (this.form.get('mobileNo').valid) {
  //     this.sweetAlertService.showInfo('Verification Link Sent', 'Please check your SMS inbox for the verification steps.');
  //
  //     // this.authService.requestEmailVerify(this.form.value.email).subscribe(data => {
  //     //   console.log(data)
  //     //   if (data.isSuccess) {
  //     //     this.sweetAlertService.showInfo('Verification Link Sent', 'Please check your email inbox for the email verification steps.');
  //     //   } else {
  //     //     this.sweetAlertService.showError(data.result.code);
  //     //   }
  //     // })
  //   }
  // }

  startTimer(minutes: number) {
    this.countdown = minutes * 60;
    this.intervalId = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.sentTAC = false;
        clearInterval(this.intervalId);
      }
    }, 1000);
  }


  reloadCurrentPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


  changePassword() {
    this.authService.requestChangePasswordLink(this.form).subscribe(data => {
      if (data.isSuccess) {
        this.sweetAlertService.showInfo('Email Sent', 'Please check your email inbox for password reset instruction')
      } else {
        this.sweetAlertService.showError(data.result.code);
      }
    })
  }

  doGeocoding() {
    if((this.form.get('street').value == null || this.form.get('street').value.trim() == '')
      && (this.form.get('postcode').value == null || this.form.get('postcode').value.trim() == '')) {
      return;
    }

    let address = '';
    if(this.form.get('street').value != null) {
      address += this.form.get('street').value;
    }
    if(this.form.get('street').value != null && this.form.get('postcode').value != null) {
      address += ',';
    }
    if(this.form.get('postcode').value != null) {
      address += this.form.get('postcode').value;
    }
    this.spinner.show();
    this.osmService.geocoding(address).subscribe((response) => {
      console.log(response);
      if(response && response.length > 0) {
        this.form.get('latitude').setValue(response[0].lat);
        this.form.get('longitude').setValue(response[0].lon);

        let form = {
          x: this.form.get('latitude').value,
          y: this.form.get('longitude').value
        }
        this.jendelaService.getAddress(form).subscribe((response) => {
          console.log(response);
          this.spinner.hide();
          if(response.error != null) {
            console.log("jendela API returned error");
            console.log(response.error);
            this.form.controls['cityName'].enable();
            this.form.controls['districtName'].enable();
            this.form.controls['stateName'].enable();
          }
          else if(response.results.length == 0){
            console.log("no address found from jendela API.");
            this.form.controls['cityName'].enable();
            this.form.controls['districtName'].enable();
            this.form.controls['stateName'].enable();
          }
          else {
            this.form.get('stateName').setValue(response.results[0].state);
            this.form.get('stateCode').setValue(response.results[0].state_code);
            this.form.get('parliamentName').setValue(response.results[0].parliament);
            this.form.get('parliamentCode').setValue(response.results[0].parliament_code);
            this.form.get('districtName').setValue(response.results[0].district);
            this.form.get('districtCode').setValue(response.results[0].district_code);
            this.form.get('cityName').setValue(response.results[0].mukim);
            this.form.get('cityCode').setValue(response.results[0].mukim_code);

            this.form.controls['cityName'].disable();
            this.form.controls['districtName'].disable();
            this.form.controls['stateName'].disable();
          }
        }, (err) => {
          this.spinner.hide();
          console.log("jendela API error");
          console.log(err);
          this.form.controls['cityName'].enable();
          this.form.controls['districtName'].enable();
          this.form.controls['stateName'].enable();
          this.form.controls['latitude'].enable();
          this.form.controls['longitude'].enable();
        });
      }
      else {
        this.spinner.hide();
        console.log("no coordinate found from osm API.");
        this.form.controls['cityName'].enable();
        this.form.controls['districtName'].enable();
        this.form.controls['stateName'].enable();
        this.form.controls['latitude'].enable();
        this.form.controls['longitude'].enable();
      }
    }, (err) => {
      this.spinner.hide();
      console.log("osm API error");
      console.log(err);
      this.form.controls['cityName'].enable();
      this.form.controls['districtName'].enable();
      this.form.controls['stateName'].enable();
      this.form.controls['latitude'].enable();
      this.form.controls['longitude'].enable();
    });
  }

  doReset() {
    this.form.patchValue({
      name: this.profileInfo.name,
      salutation: this.profileInfo.salutation,
      gender: this.profileInfo.gender,
      dateOfBirth: this.profileInfo.dateOfBirth ? datepipe.transform(this.profileInfo.dateOfBirth, 'yyyy-MM-dd') : null,
      age: this.profileInfo.age,
      isCitizen: this.profileInfo.isCitizen.toString(),
      //nricPassportNo: this.profileInfo.nricPassportNo,
      //email: this.profileInfo.email,
      //mobileNo: this.profileInfo.mobileNo,
      locationType: this.profileInfo.locationType,
      buildingType: this.profileInfo.buildingType,
      buildingName:  this.profileInfo.buildingName,
      lot:  this.profileInfo.lot,
      unitNo:  this.profileInfo.unitNo,
      floorNo:  this.profileInfo.floorNo,
      block:  this.profileInfo.block,
      street:  this.profileInfo.street,
      section:  this.profileInfo.section,
      landmark:  this.profileInfo.landmark,
      postcode: this.profileInfo.postcode,
      latitude: this.profileInfo.latitude,
      longitude: this.profileInfo.longitude,
      cityName: this.profileInfo.cityName,
      cityCode: this.profileInfo.cityCode,
      districtName: this.profileInfo.districtName,
      districtCode: this.profileInfo.districtCode,
      parliamentName: this.profileInfo.parliamentName,
      parliamentCode: this.profileInfo.parliamentCode,
      stateName: this.profileInfo.stateName,
      stateCode: this.profileInfo.stateCode,
    });
    this.form.controls['cityName'].disable();
    this.form.controls['districtName'].disable();
    this.form.controls['stateName'].disable();
    this.form.controls['latitude'].disable();
    this.form.controls['longitude'].disable();
  }

  calculateAge() {
    this.form.controls['age'].setValue(null);

    if(this.form.controls['dateOfBirth'].value != null) {
      let timeDiff = Math.abs(Date.now() - new Date(this.form.controls['dateOfBirth'].value).getTime());
      let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
      this.form.controls['age'].setValue(age);
    }
  }

  getMaxDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


}
