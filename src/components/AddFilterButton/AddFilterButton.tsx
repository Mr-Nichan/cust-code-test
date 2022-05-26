import React from 'react'
import { styled } from '@mui/system'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

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
  boxSizing: 'border-box'
})

interface IButtonProps {
  name: string
}

export const AddFilterButton: React.FC<IButtonProps> = ({name}: IButtonProps) => {
    return (
        <StyledButton
          onClick={() => console.log('Boop!')}
          variant="outlined"
          startIcon={<AddIcon />}
          >
            {name}
          </StyledButton>
    )
}