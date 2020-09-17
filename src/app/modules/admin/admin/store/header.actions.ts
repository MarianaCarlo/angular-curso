import { createAction, props } from '@ngrx/store';

export const ShowPlates = createAction('[HEADER]ShowPlates', props<{plates: any}>());
