import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SpinnerVisibilityService} from 'ng-http-loader';
import {ProductService} from '../../../core/services/product.service';
import {SweetAlertService} from '../../../core/services/sweetalert.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delivery-order-detail',
  templateUrl: './delivery-order-detail.component.html',
  styleUrls: ['./delivery-order-detail.component.scss']
})
export class DeliveryOrderDetailComponent implements OnInit {
  doForm: FormGroup; // validation form
  submit: boolean;
  uuid: string;
  productSelections: any[];

  constructor(private formBuilder: FormBuilder,
              private modalService: NgbModal,
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
        // this.formBuilder.group({
        //   uuid: [''],
        //   quantity: ['', Validators.required],
        //   remark: ['', Validators.required]
        // })
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
    this.sweetAlertService.showWarningWithCallback('Warning', 'Are yous sure to remove this product?', (response) => {
      if (response.isConfirmed) {
        this.productList.removeAt(index);
      }
    })
  }

  addProduct() {
    if (this.productList.length > 0 && this.productList.at(this.productList.length - 1).invalid) {
      return;
    }
    this.productList.push(this.formBuilder.group({
      uuid: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      remark: ['']
    }));
  }

  /**
   * Bootsrap validation form submit method
   */
  doSubmit() {
    console.log(this.doForm.value)
    this.submit = true;
    if (this.uuid) {
      this.doForm.patchValue({
        uuid: this.uuid,
      });
    }
    // this.productService.save(this.doForm).subscribe(response => {
    //   if (response.isSuccess) {
    //     this.sweetAlertService.showSuccess('Saved');
    //     this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    //   } else {
    //     this.sweetAlertService.showWarning('Warning', response.result.message);
    //   }
    // })
  }

  openSearchCustomer() {

  }

  onSelectProduct(item: any, index: number) {
    console.log(item)
    this.productList.at(index).patchValue({
      product: item
    })
    const selectedIndex = this.productSelections.findIndex(prod => prod.uuid === item);
    if (selectedIndex !== -1) {
      this.productSelections[selectedIndex].disabled = true;
    }
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

    this.productService.getAll().subscribe(response => {
      if (response.isSuccess) {
        this.productSelections = response.result;
      } else {
        console.error(response);
      }
    })
  }

}
