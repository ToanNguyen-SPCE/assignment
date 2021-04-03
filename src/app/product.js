import { createSlice } from '@reduxjs/toolkit';
import productsMock from '../data/product.js';
export const Products = createSlice({
  name: 'product',
  initialState: {
    products: productsMock,
    product: {},
    bid: {
        biddingHistory: [
            { user: 'Your bid', time: '2021-04-03T19:29:12+07:00', bidNumber: 9 },
            { user: 'Your bid', time: '2021-04-03T19:29:12+07:00', bidNumber: 8 },
            { user: 'Your bid', time: '2021-04-03T19:29:12+07:00', bidNumber: 6 },
            { user: 'User 123', time: '2021-04-03T19:29:12+07:00', bidNumber: 5 },
        ]
    }
  },
  reducers: {
    getProduct: (state, action) => {
      state.product = productsMock[action.payload]
    },
    setBid: (state, action) => {
      state.bid.biddingHistory.unshift(action.payload);
    }
  },
});

export const { 
    getProduct, 
    setBid,
} = Products.actions;

export default Products.reducer;
