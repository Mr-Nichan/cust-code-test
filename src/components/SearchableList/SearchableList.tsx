import React, { useState } from 'react'
import { styled } from '@mui/system'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { ListItem } from './ListItem'
import { IListItem, ISearchableListProps } from '../../interfaces'

const StyledGrid = styled(Grid, {})({
  marginTop: '10px'
})

const StyledTextField = styled(TextField, {})({
  fontFamily: 'Work Sans',
  fontSize: '14px',
  borderRadius: '5px',
  border: '1px solid #9FB4B4',
  marginBottom: '20px',
  marginLeft: '10px',
  marginRight: '10px'
})

export const SearchableList: React.FC<any> = ({label, list, inputPlaceholder, itemClickAction, activeItems}: ISearchableListProps) => {
  const [searchVal, setSearchVal] = useState('')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchVal(e.target.value)
  }

  const filteredList = list.filter((item) => {
    if (searchVal !== '') {
      return item.name.toLowerCase().indexOf(searchVal.toLowerCase()) > -1
    }
    return true
  })

  return (
    <StyledGrid container>
      <StyledTextField
        variant="outlined"
        fullWidth
        size="small"
        value={searchVal}
        onChange={handleChange}
        placeholder={inputPlaceholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {
        filteredList.map((item: IListItem, i: number) => {
          return (
            <ListItem
              key={i}
              image={item.image}
              name={item.name}
              onClick={() => itemClickAction(item.id)}
              active={activeItems.includes(item.id)}
            />
          )
        })
      }
    </StyledGrid>
  )
}