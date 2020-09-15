import {Action, createReducer} from '@ngrx/store';

// persona: AUX = {
//   name: '',
//   age: 15
// }

export interface HomeState {
  items: any;
  totalAmount: number;
}

export const initialState: HomeState = {
  items: {},
  totalAmount: 0
};

const featureReducer = createReducer(
  initialState
);

export function reducer(state: HomeState, action: Action): any {
  return featureReducer(state, action);
};
