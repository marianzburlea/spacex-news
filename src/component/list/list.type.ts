export interface ColumnConfig {
  field: string
  sortable: boolean
  filter?: string
}

export interface Info {
  launchName: string
  date: string
  details: string
  id: number
}

export interface List {
  client: 'wowdop' | 'spacex'
  dataTestid?: string
}

export interface StyledList {
  dataTestid?: number
}

export interface State {
  selected?: Info
  list: Info[]
}
