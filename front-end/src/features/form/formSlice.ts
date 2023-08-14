import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



const initialState: String = ''

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submit: (state, action) => action.payload
   
  },
})

// Action creators are generated for each case reducer function
export const { submit } = formSlice.actions

export default formSlice.reducer