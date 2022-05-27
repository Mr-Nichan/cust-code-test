import { Chip } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { styled } from '@mui/system'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { removeFilter as removeUserFilter } from '../../redux/features/user-filter/userFilterSlice'
import { removeFilter as removeIntegrationFilter } from '../../redux/features/integration-filter/integrationFilterSlice'

const StyledChip = styled(Chip, {})({
  marginRight: '5px'
})

export const ActiveOptions = () => {
  const userFilter = useSelector((state: RootState) => state.userFilter.filterBy)
  const integrationFilter = useSelector((state: RootState) => state.integrationFilter.filterBy)
  const dispatch = useDispatch()
  
  return (
    <>
      {/* User filter chips */}
      {userFilter.map((item) => {
        return (
          <StyledChip
            label={`User: ${item}`}
            onDelete={() => dispatch(removeUserFilter(item))}
            deleteIcon={<HighlightOffIcon />}
          />
        )
      })}

      {/* Itegrations filter chips */}
      {integrationFilter.map((item) => {
        return (
          <StyledChip
            label={`Integration: ${item}`}
            onDelete={() => dispatch(removeIntegrationFilter(item))}
            deleteIcon={<HighlightOffIcon />}
          />
        )
      })}
    </>
  )
}