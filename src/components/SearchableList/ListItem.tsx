import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import { styled } from '@mui/system'

const StyledGrid = styled(Grid, {})({
  width: '100%',
  height: '40px',
  fontFamily: 'Work Sans',
  fontSize: '18px',
  borderRadius: '5px',
  alignItems: 'center',
  margin: '2px',
  color: '#9FA2B4'
})

const StyledTypography = styled(Typography, {})({
  marginLeft: '12px'
})

type IListItem = {
  id: number;
  image: string
  name: string,
  active: boolean,
  onClick: Function
}

export const ListItem: React.FC<any> = ({id, image, name, active, onClick}: IListItem) => {
    return (
      <>
        <StyledGrid
          container
          onClick={() => {
            if (!active) {
              onClick()
            }
          }}
          sx={active ? {
              backgroundColor: '#D4D4D4',
              color: '#fff'
            } : {
              '&:hover': {
                backgroundColor: '#99CC98',
                color: '#FFF'
          }}}
        >
          <img src={`images/${image}`} style={{ width: '25px', height: '25px', marginLeft: '8px' }} alt="item-icon" />
          <StyledTypography sx={active ? { fontWeight: '600' }: {} }>{name}</StyledTypography>
        </StyledGrid>
      </>
    )
}