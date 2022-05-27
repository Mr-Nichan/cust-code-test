import React, { useState} from 'react'
import { styled } from '@mui/system'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { SearchableList } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { toggleFilterMenu } from '../../redux/features/ui-state/uiStateSlice'
import { addFilter as addUserFilter } from '../../redux/features/user-filter/userFilterSlice'
import { addFilter as addIntegrationFilter } from '../../redux/features/integration-filter/integrationFilterSlice'
import { StyledTabProps, StyledTabsProps, TabPanelProps } from '../../interfaces'

import { users } from '../../data/users-mock'
import { integrations } from '../../data/integrations-mock'

const StyledCard = styled(Card, {})({
  maxWidth: '340px',
  borderRadius: '5px',
  border: '1px solid #F8F8F8',
  boxShadow: '0px 15px 35px rgba(0, 0, 0, 0.1)'
})

const StyledCardContent = styled(CardContent, {})({
  padding: 0
})

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: 'Work Sans',
    '&:hover': {
      color: '#65B366',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#339933',
      fontWeight: '600'
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    }
  })
)

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    top: '2px',
    borderBottom: '1.3px solid #339933',
    maxWidth: '70%',
    width: '100%'
  },
});

export const FilterCard: React.FC<any> = (props) => {
  const [value, setValue] = useState(0);
  const activeUserFilters = useSelector((state: RootState) => state.userFilter.filterBy)
  const activeIntegrationFilters = useSelector((state: RootState) => state.integrationFilter.filterBy)
  const dispatch = useDispatch()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <StyledCard sx={{ minWidth: 275 }} raised>
      <StyledCardContent>
        <Box sx={{ boxSizing: 'border-box', borderBottom: '1.3px solid #eee' }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
          >
            <StyledTab label="Users" />
            <StyledTab label="Integrations" />
          </StyledTabs>
        </Box>

        <TabPanel value={value} index={0}>
          <SearchableList
            inputPlaceholder='Search options'
            list={users}
            itemClickAction={(id: number) => {
              dispatch(toggleFilterMenu())
              dispatch(addUserFilter(id))
            }}
            activeItems={activeUserFilters}
          />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <SearchableList
            inputPlaceholder='Search options'
            list={integrations}
            itemClickAction={(id: number) => {
              dispatch(toggleFilterMenu())
              dispatch(addIntegrationFilter(id))
            }}
            activeItems={activeIntegrationFilters}
          />
        </TabPanel>
      </StyledCardContent>
    </StyledCard>
  )
}