import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SpinnerVisibilityService} from 'ng-http-loader';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productForm: FormGroup; // validation form
  submit: boolean;

  constructor(private formBuilder: FormBuilder,
              private spinner: SpinnerVisibilityService,
              private activatedRoute: ActivatedRoute) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      code: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    });
  }

  /**
   * Returns form
   */
  get form() {
    return this.productForm.controls;
  }

  /**
   * Bootsrap validation form submit method
   */
  doSubmit() {
    this.submit = true;
  }

  ngOnInit(): void {
  }

}
