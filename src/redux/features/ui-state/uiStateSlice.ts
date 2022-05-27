import { createSlice } from '@reduxjs/toolkit'

export interface uiState {
  filterMenuOpen: boolean
}

const initialState: uiState = {
  filterMenuOpen: false,
}

export const uiStateSlice = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    toggleFilterMenu: (state) => {
      state.filterMenuOpen = !state.filterMenuOpen
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleFilterMenu } = uiStateSlice.actions

export default uiStateSlice.reducer