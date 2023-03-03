import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SpinnerVisibilityService} from 'ng-http-loader';
import {ProductService} from '../../../core/services/product.service';
import {SweetAlertService} from '../../../core/services/sweetalert.service';

@Component({
  selector: 'app-delivery-order-detail',
  templateUrl: './delivery-order-detail.component.html',
  styleUrls: ['./delivery-order-detail.component.scss']
})
export class DeliveryOrderDetailComponent implements OnInit {
  doForm: FormGroup; // validation form
  submit: boolean;
  uuid: string;

  constructor(private formBuilder: FormBuilder,
              private spinner: SpinnerVisibilityService,
              private productService: ProductService,
              private sweetAlertService: SweetAlertService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.doForm = this.formBuilder.group({
      refNo: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      deliveryDate: ['', [Validators.required]],
      productList: this.formBuilder.array([
        this.formBuilder.group({
          uuid: [''],
          quantity: ['', Validators.required],
          remark: ['', Validators.required]
        })
      ])
    });
  }

  /**
   * Returns form
   */
  get form() {
    return this.doForm.controls;
  }

  get productList() {
    return this.doForm.get('productList') as FormArray;
  }

  removeProduct(index: number) {
    this.productList.removeAt(index)
  }

  addProduct() {
  }

  /**
   * Bootsrap validation form submit method
   */
  doSubmit() {
    this.submit = true;
    if (this.uuid) {
      this.doForm.patchValue({
        uuid: this.uuid,
      });
    }
    this.productService.save(this.doForm).subscribe(response => {
      if (response.isSuccess) {
        this.sweetAlertService.showSuccess('Saved');
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      } else {
        this.sweetAlertService.showWarning('Warning', response.result.message);
      }
    })
  }

  openSearchCustomer() {

  }
  ngOnInit(): void {
    this.uuid = this.activatedRoute.snapshot.params.uuid;
    if (this.uuid) {
      this.productService.get(this.uuid).subscribe(response => {
        if (response.isSuccess) {
          this.doForm.patchValue({
            name: response.result.name,
            code: response.result.code
          });
        } else {
          this.sweetAlertService.showWarning('Warning', response.result.message);
        }
      })
    }
  }

}
