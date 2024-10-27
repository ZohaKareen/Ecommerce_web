import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";


const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
    
  },
});

export default store;
