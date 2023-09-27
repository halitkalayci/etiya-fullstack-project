import { createAction, props } from '@ngrx/store';

export const addItemToCart = createAction(
  '[Cart] AddItemToCart',
  props<{ id: number; quantity: number }>()
);
