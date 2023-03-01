import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SweetAlertService} from '../../../core/services/sweetalert.service';
import {CustomerService} from '../../../core/services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customerForm: FormGroup; // validation form

  submit: boolean;
  uuid: string;
  cityList: any[];
  stateList: any[];
  addressTypeList: any[];

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService,
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
          postalCode: ['', Validators.required],
          cityOld: ['', Validators.required],
          city: ['', Validators.required],
          stateOld: ['', Validators.required],
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
      email: ['', Validators.required],
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
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    }));
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
        console.log(response)
        if (response.isSuccess) {
          this.customerForm.patchValue({
            previousSysId: response.result.previousSysId,
            name: response.result.name
          });
          this.customerForm.controls['previousSysId'].disable();
        } else {
          this.sweetAlertService.showWarning('Warning', response.result.message);
        }
      })
    }
  }

}
