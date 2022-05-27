import { createSlice } from '@reduxjs/toolkit'
import { IuiState } from '../../../interfaces'

const initialState: IuiState = {
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