import { PlaylistAddOutlined } from '@mui/icons-material'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IntegrationFilterState, IListItem } from '../../../interfaces'

const initialState: IntegrationFilterState = {
  filterBy: [],
}

export const integrationFilterSlice = createSlice({
  name: 'integrationFilter',
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
export const { addFilter, removeFilter } = integrationFilterSlice.actions

export default integrationFilterSlice.reducer