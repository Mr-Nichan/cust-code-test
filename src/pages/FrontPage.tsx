import React from 'react'
import { Grid } from '@mui/material'
import { AddFilterButton, FilterCard, ActiveOptions } from '../components'

export const FrontPage = () => {
    return (
      <Grid container xs={4} spacing={2} margin={1}>
        <Grid item xs={4} className='p'>
          <AddFilterButton name='Add Filter' />
        </Grid>
        <Grid item xs={12}>
          <FilterCard />
        </Grid>
        <Grid item xs={12}>
          <ActiveOptions />
        </Grid>
      </Grid>
    )
}