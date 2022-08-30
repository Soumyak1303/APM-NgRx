import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleProductCode = createAction('[Product] Toggle Product Code');
export const setCurrentProduct = createAction(
  '[Product] set Current Product',
  props<{ product: Product }>()
);
export const clearCurrentProduct = createAction(
  '[Product] clear Current Product'
);
export const initializeCurrentProduct = createAction(
  '[Product] initialize Current Product'
);
export const loadProducts = createAction(
  '[Product] load'
);
export const loadProductsSuccess = createAction(
  '[Product] load success',
  props<{products : Product[]}>()
);
export const loadProductsFailure = createAction(
  '[Product] load Fail',
  props<{error: string}>()
);
