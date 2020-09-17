
import { ShowPlates } from './header.actions';
import { createReducer, on, Action } from '@ngrx/store';
export interface HeaderState {
  totalStock: number;
  totalNational: number;
  totalInternational: number;
}


export const initialState: HeaderState = {
  totalStock: 0,
  totalNational: 0,
  totalInternational: 0
};

const featureReducer = createReducer(
  initialState,
  // tslint:disable-next-line: max-line-length
  on(ShowPlates, (state, {plates}) => ({...state, totalStock: state.totalStock,
    totalNational: state.totalNational, totalInternational: state.totalInternational}))
);

export function reducer(state: HeaderState, action: Action): any {
  return featureReducer(state, action);
}
