import { Store } from '@ngrx/store';
import { PedidosyaService } from './../../../shared/services/pedidosya.service';
import { Subscription } from 'rxjs';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  plateCreateSubs: Subscription;
  plateGetSubs: Subscription;
  idEdit: any;
  plates = [];
  nacional = [];
  internacional = [];
  HomeSubs: Subscription;
  stockTotal: number;
  totalNacional: number;
  totalInternacional: number = 0;
  sw = false;
  constructor(private authService: AuthService, private pedidosyaService: PedidosyaService, private store: Store<any>) { }

  ngOnInit(): void {
    this.loadPlates();

    this.HomeSubs = this.store.select(s => s.home).subscribe(res => {
      console.log('STOCK', res);
      this.stockTotal = res.totalStock;
      this.totalNacional = res.totalNacional;
      this.totalInternacional = res.totalInteracional;
      console.log('stockTotal', this.stockTotal);
      console.log('totalNacional', this.totalNacional);
      console.log('totalInternacional', this.totalInternacional);
    });

  }

  // tslint:disable-next-line: typedef
  ngOnChanges() {
    this.HomeSubs = this.store.select(s => s.home).subscribe(res => {
      console.log('STOCK', res);
      this.stockTotal = res.totalStock;
      this.totalNacional = res.totalNacional;
      this.totalInternacional = res.totalInteracional;
      console.log('stockTotal', this.stockTotal);
      console.log('totalNacional', this.totalNacional);
      console.log('totalInternacional', this.totalInternacional);
    });
  }

  showStock(): number {
    return this.totalInternacional;
  }
  public onLogout(): void {
    this.authService.logout();
  }

  stockTotal2(): number {
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
  loadPlates(): void {
    this.plates = [];
    this.plateGetSubs = this.pedidosyaService.getPlates().subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.plates.push({id: p[0],  ...p[1]}));
      this.nacional = this.plates.filter(s => s.type === 'nacional');
      this.internacional = this.plates.filter(s => s.type === 'internacional');
    });
  }

  // tslint:disable-next-line: typedef
  saveClickChild(event) {
    console.log('EVENT CHILD: ', event);
  }

  // tslint:disable-next-line: typedef
  saveClickChild2(event) {
    console.log('EVENT CHILD: ', event);
  }



}
