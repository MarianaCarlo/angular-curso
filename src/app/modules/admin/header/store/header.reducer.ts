
import { OnInit } from '@angular/core';
import { PedidosyaService } from './../../../../shared/services/pedidosya.service';
import { ShowPlates } from './header.actions';
import { createReducer, on, Action } from '@ngrx/store';
export interface HeaderState {
  totalStock: number;
  totalNational: number;
  totalInternational: number;
}

export class HeaderRedcuer {
  plates = [];
  nacional = [];
  internacional = [];
  constructor(private pedidosyaService: PedidosyaService){}
  loadPlates(): void {
    this.plates = [];
    this.pedidosyaService.getPlates().subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.plates.push({id: p[0],  ...p[1]}));
      this.nacional = this.plates.filter(s => s.type === 'nacional');
      this.internacional = this.plates.filter(s => s.type === 'internacional');
    });
  }
  public onInfo(): number {
    let aux = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.nacional.length; i++) {
      aux = aux + this.nacional[i].stock;
    }
    return aux;
  }
}

export const initialState: HeaderState = {
  totalStock: 0,
  totalNational: 0,
  totalInternational: 0
};

const featureReducer = createReducer(
  initialState,
  // tslint:disable-next-line: max-line-length
  on(ShowPlates, (state, {}) => ({...state, totalStock: state.totalStock,
    totalNational: state.totalNational, totalInternational: state.totalInternational}))
);

export function reducer(state: HeaderState, action: Action): any {
  return featureReducer(state, action);
}
