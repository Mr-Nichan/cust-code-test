import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

interface IButtonProps {
  name: any
}

export const AddFilterButton: React.FC<IButtonProps> = ({name}: IButtonProps) => {
    return (
        <Button
          onClick={() => console.log('Boop!')}
          variant="outlined"
          startIcon={<AddIcon />}
          >
            {name}
          </Button>
    )
}