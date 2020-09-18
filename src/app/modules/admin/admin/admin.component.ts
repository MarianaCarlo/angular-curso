import { ShowPlates } from './../header/store/header.actions';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PedidosyaService } from './../../../shared/services/pedidosya.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private pedidosyaService: PedidosyaService, private formBuilder: FormBuilder, private store: Store<any>) { }

  plateForm: FormGroup;
  plateCreateSubs: Subscription;
  plateGetSubs: Subscription;
  idEdit: any;
  plates = [];
  nacional = [];
  internacional = [];
  totalS: number;

  @Output() datos = new EventEmitter();

  total: number;

  ngOnInit(): void {
    this.loadPlates();

    this.plateForm = this.formBuilder.group({
      name: ['', [ Validators.required, Validators.minLength(3)]],
      price: '',
      stock: '',
      type: ['', [ Validators.required]],
      urlImage: ''
    });
  }

  loadPlates(): void {
    this.plates = [];
    this.plateGetSubs = this.pedidosyaService.getPlates().subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.plates.push({id: p[0],  ...p[1]}));
      this.nacional = this.plates.filter(s => s.type === 'nacional');
      this.internacional = this.plates.filter(s => s.type === 'internacional');
      this.totalS = this.totalStock();
      console.log('TTTTTTTTTTTTTTTTT ', this.totalS);
    });
  }

  onCreatePlate(): void {
    console.log('FORM GROUP: ', this.plateForm.value);

    this.plateCreateSubs = this.pedidosyaService.addPlate(this.plateForm.value).subscribe(res => {
      console.log('RSPUESTA: ', res);
      this.loadPlates();
    },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  totalStock(): number{
    let aux= 0;
    // tslint:disable-next-line: prefer-for-of
    for(let i = 0; i<this.plates.length; i++){
      aux = aux + this.plates[i].stock;
    }
    this.totalS = aux;
    return aux;
  }


  stockTotal(): number {
    let aux = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.plates.length; i++) {
      aux = aux + this.plates[i].stock;
    }
    return aux;
  }

  nationalTotal(): number {
    return this.nacional.length;
  }

  internationalTotal(): number {
    return this.internacional.length;
  }

  public onReporte(): void {
    this.store.dispatch(ShowPlates({totalStock: this.totalS, totalNacional:
      this.nacional.length, totalInternacional: this.internacional.length}));
    this.saveData();
  }

  // tslint:disable-next-line: typedef
  saveData(){
    this.datos.emit({
      totalStock: this.totalS,
      totalNacional: this.nacional.length,
      totalInternacional: this.internacional.length
    });
  }
}
