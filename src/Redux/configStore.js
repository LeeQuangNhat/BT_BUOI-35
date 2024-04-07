import { configureStore } from '@reduxjs/toolkit'
import gheNgoi from "./slice/gheNgoi"
export const store = configureStore({
  reducer: {
    gheNgoi,
  },
})