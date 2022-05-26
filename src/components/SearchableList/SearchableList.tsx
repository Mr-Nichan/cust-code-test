import React from 'react'
import { styled } from '@mui/system'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { ListItem } from './ListItem'

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

interface IListItem {
  id: number;
  image?: string
  name: string
}

interface ISearchableListProps {
  label: string
  list: Array<IListItem>
}

export const SearchableList: React.FC<any> = ({label, list}: ISearchableListProps) => {
    return (
      <StyledGrid container>
        <StyledTextField
          variant="outlined"
          fullWidth
          size="small"
          placeholder='Search options'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {
          list.map((item: IListItem, i: number) => {
            return (
              <ListItem key={i} image={item.image} name={item.name} />
            )
          })
        }
      </StyledGrid>
    )
}