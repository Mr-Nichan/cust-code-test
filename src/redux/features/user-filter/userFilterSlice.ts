import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserFilterState, IListItem } from '../../../interfaces'

const initialState: IUserFilterState = {
  filterBy: [],
}

export const userFilterSlice = createSlice({
  name: 'userFilter',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<IListItem>) => {
      state.filterBy = [...state.filterBy, action.payload]
    },
    removeFilter: (state, action: PayloadAction<IListItem>) => {
      const temp = state.filterBy.filter(item => {
        return item.id !== action.payload.id
      })
      
      state.filterBy = [...temp]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFilter, removeFilter } = userFilterSlice.actions

export default userFilterSlice.reducer