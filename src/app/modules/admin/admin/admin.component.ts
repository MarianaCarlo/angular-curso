import { Subscription } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PedidosyaService } from './../../../shared/services/pedidosya.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  plateForm: FormGroup;
  plateCreateSubs: Subscription;
  plateGetSubs: Subscription;
  idEdit: any;
  plates = [];
  nacional = [];
  internacional = [];

  constructor(private pedidosyaService: PedidosyaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
      console.log('RSPUESTA: ', res);
      this.loadPlates();
    },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

}
