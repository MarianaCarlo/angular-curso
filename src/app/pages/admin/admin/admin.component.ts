import { ProductService } from './../../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  products = [];
  productForm: FormGroup;
  productSubs: Subscription;

  productGetSubs: Subscription;
  // nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.productGetSubs = this.productService.getProducts().subscribe( res => {
      // {key: 1}, {key: 2}.{key: 3}
      // Object entries convierte JSON en un array especial como: [ [key, 1], [key, 2], [key, 3]]
        console.log('RESPUESTA: ', Object.entries(res));
        Object.entries(res).map(p => this.products.push(p[1]));
      }
    );
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      description: ['', [ Validators.required, Validators.minLength(3)]],
      imageURL: '',
      ownerId: '',
      price: '',
      title: ''
    });
  }

  // onEnviar(): void{
  //   console.log('VALOR: ', this.nameControl);
  //   console.log('VALOR2: ', this.nameControl.value);
  // }

  onEnviar2(): void {
    console.log('FORM GROUP: ', this.productForm.value);

    this.productSubs = this.productService.addProducts(this.productForm.value).subscribe(res => {
      console.log('RSPUESTA: ', res);
    },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
  }

}
