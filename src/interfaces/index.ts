export interface IButtonProps {
  name: string;
  onClick: Function;
}

export interface StyledTabProps {
  label: string;
}

export interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export interface IListItem {
  id: number;
  image?: string
  name: string
}

export interface ISearchableListProps {
  label: string
  list: Array<IListItem>
  inputPlaceholder: string
  itemClickAction: Function,
  activeItems: Array<number>
}

export interface IntegrationFilterState {
  filterBy: Array<number>
}

export interface IuiState {
  filterMenuOpen: boolean
}

export interface IUserFilterState {
  filterBy: Array<number>
}