import { createSlice } from '@reduxjs/toolkit'

export const shoeNumSlice = createSlice({
  name: 'shoeNum',
  initialState: {
    value: 0,
  },
  reducers: {
    setShoe:(state,action)=>{
        state.value=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setShoe } = shoeNumSlice.actions

export default shoeNumSlice.reducer