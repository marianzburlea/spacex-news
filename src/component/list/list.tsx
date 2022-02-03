import { useEffect, useReducer } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import { Button } from '@mui/material'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

import { getApi } from '../../util'
import * as S from './list.style'
import * as T from './list.type'

import { getDataForClientReducer, initialState } from './store'
import { initializeMissionNews, selectNews } from './store/action'

const defaultColumnDefs: T.ColumnConfig[] = [
  {
    field: 'launchName',
    sortable: true,
    filter: 'agStringColumnFilter',
  },
  {
    field: 'date',
    sortable: true,
  },
  {
    field: 'details',
    sortable: false,
  },
]

export const ActionButton = ({ value, dataTestid, clicked, ...rest }: any) => {
  return (
    <Button
      data-testid={dataTestid}
      size="small"
      variant="contained"
      value={value}
      onClick={clicked}
    >
      View rocket details
    </Button>
  )
}

const List = ({ client, dataTestid }: T.List) => {
  const [data, update] = useReducer(getDataForClientReducer, initialState)
  const { selected, list } = data

  useEffect(() => {
    // get new data
    const getResult = async () => {
      try {
        const result: any[] = await (await fetch(getApi(client, 50))).json()
        const data = result.map(
          ({ launch_date_local, mission_name, flight_number, details }) => ({
            date: launch_date_local,
            launchName: mission_name,
            details,
            id: flight_number,
          })
        )

        update(initializeMissionNews(data))
      } catch (error) {
        console.log('We run out of power! More electrons! More!')
      }
    }

    getResult()
  }, [])

  const handleClose = () => update(selectNews(-1))

  return (
    <S.List className="ag-theme-balham" data-testid={dataTestid}>
      {data?.list?.length && (
        <div data-testid={`${dataTestid}-success`}>
          Enjoy reading the latest news
        </div>
      )}
      <AgGridReact
        columnDefs={[
          ...defaultColumnDefs,
          {
            field: 'id',
            cellRenderer: 'action',
            cellRendererParams: {
              clicked: (e: { target: HTMLInputElement }) => {
                update(selectNews(+e.target.value))
              },
            },
          },
        ]}
        defaultColDef={{ flex: 1 }}
        frameworkComponents={{
          action: ActionButton,
        }}
        rowData={list}
        className="ag-theme-balham"
        animateRows
      >
        <AgGridColumn sortable field="launchName" />
        <AgGridColumn sortable field="date" />
        <AgGridColumn field="details" />
        <AgGridColumn field="id" />
      </AgGridReact>

      <S.Modal
        onClose={handleClose}
        open={!!selected}
        BackdropComponent={S.Backdrop}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <S.Box>
          <div id="child-modal-title">{selected?.launchName}</div>
          <div id="child-modal-description">{selected?.details}</div>
          <div id="child-modal-date">{selected?.date}</div>
        </S.Box>
      </S.Modal>
    </S.List>
  )
}

export default List
