import { ActionReducerMap } from '@ngrx/store';
import * as fromHome from '../pages/home/store/home.reducer';

import * as fromAdmin from '../modules/admin/admin/store/header.reducer';

export const reducers: ActionReducerMap<any> = {
  home: fromHome.reducer,
  admin: fromAdmin.reducer
};
