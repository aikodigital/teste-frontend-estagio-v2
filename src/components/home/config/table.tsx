import {GridActionsCellItem, GridToolbarQuickFilter } from '@mui/x-data-grid'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import {ContainerNoRowsTable, Search} from '@styles/home/table' 

// SEARCH TABLE
export function QuickSearchToolbar() {
    return (
      <Search>
        <GridToolbarQuickFilter
          quickFilterParser={(searchInput: string) =>
            searchInput
              .split(',')
              .map((value) => value.trim())
              .filter((value) => value !== '')
          }
          placeholder="Pesquisar..."
        />
      </Search>
    );
}

// COLUMNS
export  const columnsTableHome = [
    { field: 'model', headerName: 'Modelo', width: 220 },
    { field: 'name', headerName: 'Nome', width: 130 },
    { field: 'state', headerName: 'Estado', width: 130 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Perfil',
      width: 100,
      cellClassName: 'actions',
      getActions: ( params: any ) => {
        return [ 
          
          <GridActionsCellItem icon={<InfoOutlinedIcon/>} label="Delete"
            onClick={()=> open(`/profile/${params.row.id}`, '_self')} 
            color="inherit"
            // @ts-expect-error
            key={()=>Math.random()}
          />, 
        ]
      },
    },
]

// NO ROW TABLE
export function CustomNoRowsOverlay() {
  return (
      <ContainerNoRowsTable>
        <span>
          <p>Nenhum veículo encontrado!</p>
        </span>
      </ContainerNoRowsTable>
  );
}

