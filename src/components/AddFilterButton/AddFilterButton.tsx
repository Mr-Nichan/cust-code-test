import React from 'react'
import { styled } from '@mui/system'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { IButtonProps } from '../../interfaces'

const StyledButton = styled(Button, {})({
  maxWidth: '128px',
  fontFamily: 'Work Sans',
  fontSize: '14px',
  lineHeight: '16px',
  height: '40px',
  borderRadius: '5px',
  border: '1.2px solid #339933',
  textTransform: 'none',
  color: '#65B366',
  boxSizing: 'border-box',
  '&:hover': {
    border: '1.2px solid #339933',
    backgroundColor: '#33993311'
  }
})

export const AddFilterButton: React.FC<IButtonProps> = ({name, onClick}: IButtonProps) => {
    return (
        <StyledButton
          onClick={() => onClick()}
          variant="outlined"
          startIcon={<AddIcon />}
          >
            {name}
          </StyledButton>
    )
}