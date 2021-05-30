import { combineReducers } from 'redux'
import orderReducer from './orderReducer'
import productCatalogReducer from './productCatalogReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import adminReducer from './adminReducer';

export default combineReducers({
  productCatalog: productCatalogReducer,
  cartReducer, 
  user: userReducer,
  order: orderReducer,
  admin: adminReducer
})