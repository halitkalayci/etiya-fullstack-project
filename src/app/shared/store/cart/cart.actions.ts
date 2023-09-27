import { createAction, props } from '@ngrx/store';
import { GetAllProductsModel } from 'src/app/features/product/models/getAllProductsModel';

export const addItemToCart = createAction(
  '[Cart] AddItemToCart',
  props<{ product: any; quantity: number }>()
);
