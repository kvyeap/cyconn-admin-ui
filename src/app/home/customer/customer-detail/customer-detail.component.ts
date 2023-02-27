import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customerForm: FormGroup; // validation form

  createNew: boolean;
  submit: boolean;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {

    this.customerForm = this.formBuilder.group({
      customerId: ['', []],
      customerName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      deliveryCharge: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      billingCycle: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      phoneNo: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      contactPerson: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      addressUnit: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      addressStreet: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      addressPostcode: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      addressCity: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      addressState: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    });

  }

  /**
   * Returns form
   */
  get form() {
    return this.customerForm.controls;
  }

  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.createNew = false;
      } else {
        this.createNew = true;
      }
    });
  }

}
