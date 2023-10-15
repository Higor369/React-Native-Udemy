import { productSlice } from './reducers/productReducers/index';
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/productReducers'
import userReducer from './reducers/userReducer'
import cartReducert from './reducers/cartReducer'


import globalReducer from './reducers/globalReducer';

export const store = configureStore({
  reducer: {
    userReducer,
    productReducer,
    globalReducer,
    cartReducert

  },
})

export type RootState = ReturnType<typeof store.getState>;

export default store;
