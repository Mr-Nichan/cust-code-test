import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IntegrationFilterState {
  filterBy: Array<number>
}

const initialState: IntegrationFilterState = {
  filterBy: [3, 2],
}

export const integrationFilterSlice = createSlice({
  name: 'integrationFilter',
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
export const { addFilter, removeFilter } = integrationFilterSlice.actions

export default integrationFilterSlice.reducer