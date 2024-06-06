import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import textSlice from "./slice/textSlice";
import wishlistSlice from "./slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./api/productApi";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    text: textSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
