import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleProductCode = createAction('[Product] Toggle Product Code');
export const setCurrentProduct = createAction(
  '[Product] set Current Product',
  props<{ currentProductId: number }>()
);
export const clearCurrentProduct = createAction(
  '[Product] clear Current Product'
);
export const initializeCurrentProduct = createAction(
  '[Product] initialize Current Product'
);
export const loadProducts = createAction('[Product] load');
export const loadProductsSuccess = createAction(
  '[Product] load success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Product] load Fail',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);
export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ product: Product }>()
);
export const updateProductFailure = createAction(
  '[Product] Update Product Fail',
  props<{ error: string }>()
);
