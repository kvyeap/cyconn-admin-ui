import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SpinnerVisibilityService} from 'ng-http-loader';
import {ProductService} from '../../../core/services/product.service';
import {SweetAlertService} from '../../../core/services/sweetalert.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productForm: FormGroup; // validation form
  submit: boolean;
  uuid: string;

  constructor(private formBuilder: FormBuilder,
              private spinner: SpinnerVisibilityService,
              private productService: ProductService,
              private sweetAlertService: SweetAlertService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
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
    if (this.uuid) {
      this.productForm.patchValue({
        uuid: this.uuid,
      });
    }
    this.productService.save(this.productForm).subscribe(response => {
      if (response.isSuccess) {
        this.sweetAlertService.showSuccess('Saved');
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      } else {
        this.sweetAlertService.showWarning('Warning', response.result.message);
      }
    })
  }

  ngOnInit(): void {
    this.uuid = this.activatedRoute.snapshot.params.uuid;
    if (this.uuid) {
      this.productService.get(this.uuid).subscribe(response => {
        if (response.isSuccess) {
          this.productForm.patchValue({
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
