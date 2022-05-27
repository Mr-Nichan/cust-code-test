export interface IButtonProps {
  name: string;
  onClick: Function;
}

export interface IStyledTabProps {
  label: string;
}

export interface IStyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export interface ITabPanelProps {
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
  activeItems: Array<IListItem>
}

export interface IntegrationFilterState {
  filterBy: Array<IListItem>
}

export interface IuiState {
  filterMenuOpen: boolean
}

export interface IUserFilterState {
  filterBy: Array<IListItem>
}