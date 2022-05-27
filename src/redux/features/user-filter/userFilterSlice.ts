import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserFilterState } from '../../../interfaces'

const initialState: IUserFilterState = {
  filterBy: [],
}

export const userFilterSlice = createSlice({
  name: 'userFilter',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<number>) => {
      state.filterBy = [...state.filterBy, action.payload]
    },
    removeFilter: (state, action: PayloadAction<number>) => {
      const temp = state.filterBy.filter((item: number) => item !== action.payload)
      state.filterBy = [...temp]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFilter, removeFilter } = userFilterSlice.actions

export default userFilterSlice.reducer