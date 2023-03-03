import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SweetAlertService} from '../../../core/services/sweetalert.service';
import {CustomerService} from '../../../core/services/customer.service';
import {CommonService} from '../../../core/services/common.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customerForm: FormGroup; // validation form

  submit: boolean;
  uuid: string;
  addressTypeList: any[];

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService,
              private commonService: CommonService,
              private sweetAlertService: SweetAlertService,
              private activatedRoute: ActivatedRoute) {

    this.customerForm = this.formBuilder.group({
      previousSysId: [''],
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      contactList: this.formBuilder.array([
        this.formBuilder.group({
          uuid: [''],
          name: ['', Validators.required],
          contactNo: ['', Validators.required],
          email: ['', Validators.required],
        })
      ]),
      addressList: this.formBuilder.array([
        this.formBuilder.group({
          uuid: [''],
          name: ['', Validators.required],
          addressType: ['', Validators.required],
          unitNo: ['', Validators.required],
          street: ['', Validators.required],
          postcode: ['', Validators.required],
          oldCityName: ['', Validators.required],
          city: ['', Validators.required],
          oldStateName: ['', Validators.required],
          state: ['', Validators.required],
        })
      ]),
    });

  }

  /**
   * Returns form
   */
  get form() {
    return this.customerForm.controls;
  }

  get contactList() {
    return this.customerForm.get('contactList') as FormArray;
  }

  get addressList() {
    return this.customerForm.get('addressList') as FormArray;
  }

  addContact() {
    this.contactList.push(this.formBuilder.group({
      name: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }));
  }

  removeContact(index: number) {
    this.contactList.removeAt(index)
  }

  addAddress() {
    this.addressList.push(this.formBuilder.group({
      uuid: [''],
      name: ['', Validators.required],
      addressType: ['', Validators.required],
      unitNo: ['', Validators.required],
      street: ['', Validators.required],
      postcode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      oldCityName: [''],
      oldStateName: [''],
    }));
    this.disableFields();
  }

  removeAddress(index: number) {
    this.addressList.removeAt(index)
  }

  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true;
  }

  ngOnInit(): void {
    this.uuid = this.activatedRoute.snapshot.params.uuid;
    if (this.uuid) {
      this.customerService.get(this.uuid).subscribe(response => {
        if (response.isSuccess) {
          this.customerForm.patchValue({
            previousSysId: response.result.previousSysId,
            name: response.result.name,
            contactList: response.result.contactList,
            addressList: response.result.addressList,
          });
          this.customerForm.controls['previousSysId'].disable();
          this.disableFields();
        } else {
          this.sweetAlertService.showWarning('Warning', response.result.message);
        }
      })
    }
  }

  getCityStateByPostcode(index: number, postcode: string) {
    this.commonService.getCityStateByPostcode(postcode).subscribe(response => {
      if (response.isSuccess) {
        this.addressList.controls[index].patchValue({
          city: response.result.city,
          state: response.result.state
        });
      } else {
        this.sweetAlertService.showWarning('Not Found', 'City / State not found by postcode');
      }
    })
  }

  disableFields() {
    this.addressList.controls.forEach((address: FormGroup) => {
      address.get('oldCityName').disable();
      address.get('oldStateName').disable();
      address.get('city').disable();
      address.get('state').disable();
    })
  }
}
