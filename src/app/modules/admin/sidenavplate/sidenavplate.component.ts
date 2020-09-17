import { PedidosyaService } from './../../../shared/services/pedidosya.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidenavplate',
  templateUrl: './sidenavplate.component.html',
  styleUrls: ['./sidenavplate.component.scss']
})
export class SidenavplateComponent implements OnInit, OnDestroy {

  plateForm: FormGroup;

  plates = [];
  nacional = [];
  internacional = [];
  plateGetSubs: Subscription;
  plateCreateSubs: Subscription;
  plateUpdateSubs: Subscription;
  plateDeleteSubs: Subscription;

  constructor(private pedidosyaService: PedidosyaService, private formBuilder: FormBuilder) { }

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
    });
  }

  onCreatePlate(): void {
    console.log('FORM GROUP: ', this.plateForm.value);

    this.plateCreateSubs = this.pedidosyaService.addPlate(this.plateForm.value).subscribe(res => {
      console.log('RSPUESTA CREATE PLATE: ', res);
      this.loadPlates();
    },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.plateGetSubs ? this.plateGetSubs.unsubscribe() : '';
    this.plateCreateSubs ? this.plateCreateSubs.unsubscribe() : '';
    this.plateUpdateSubs ? this.plateUpdateSubs.unsubscribe() : '';
    this.plateDeleteSubs ? this.plateDeleteSubs.unsubscribe() : '';
  }

}
