import { configureStore } from '@reduxjs/toolkit'
import shoeNum from '../reducers/shoeSet/shoeNum'
export default configureStore({
  reducer: {
    shoeNum:shoeNum,
  },
})