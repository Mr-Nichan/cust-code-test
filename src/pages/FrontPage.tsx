import React from 'react'
import { Grid } from '@mui/material'
import { AddFilterButton, FilterCard, ActiveOptions } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { toggleFilterMenu } from '../redux/features/ui-state/uiStateSlice'


export const FrontPage = () => {
  const { filterMenuOpen } = useSelector((state: RootState) => state.uiState)
  const dispatch = useDispatch()
  return (
    <Grid container spacing={2} margin={1}>
      <Grid item xs={4} className='p'>
        <AddFilterButton name='Add Filter' onClick={() => dispatch(toggleFilterMenu())} />
      </Grid>
      {filterMenuOpen &&
      <Grid item xs={12}>
        <FilterCard />
      </Grid>}
      <Grid item xs={12}>
        <ActiveOptions />
      </Grid>
    </Grid>
  )
}
