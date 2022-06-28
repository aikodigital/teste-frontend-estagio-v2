import { DataGrid } from '@mui/x-data-grid'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import dynamic from 'next/dynamic'
import { format } from 'date-fns';
import type { GetServerSideProps, NextPage } from 'next'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'
// COMPONENTS
const Map = dynamic( () => import('@components/home/Map'), { ssr: false })
import HeadPage from '@components/HeadPage'
import Menu from '@components/Menu'
import Statistics from '@components/home/Statistics'
import { CustomFooter } from '@components/table/config'
import { columnsTableHome, CustomNoRowsOverlay, QuickSearchToolbar } from '@components/home/config/table'
// STYLES
import { ContainerMain } from '@styles/container'
import { Table, styleTable } from '@styles/home/table';
import { ContainerDateAndTable, ContainerMapAndTable } from '@styles/home'
import { SelectedDate } from '@styles/profile' 
// TYPES
import { iHome } from 'src/@types/pages'
import { iEquipments } from 'src/@types/api'
// SERVICES
import { api } from 'src/services/api'

const Home: NextPage<iHome> = ({lastPositionDate}) => {
  // DATA EQUIPMENTS
  const [equipments, setEquipments] = useState<iEquipments[]>();

  // DATA SELECT
  const [selectedDate, setValue] = useState<Date | null>(new Date(lastPositionDate))
  const handleChange = (newValue: Date | null) => {setValue(newValue)}

  useEffect(()=>{
    // DATE FORMAT
    let dateFormat = format(new Date(selectedDate as Date), 'dd-MM-yyyy')

    // EQUIPMENTS
    api.get(`/api/equipments/${dateFormat}`).then(
      ({data}) => setEquipments(data)
    )
  },[selectedDate])

  return (<>
  <HeadPage titlePage='Home'/>
   
  <Menu/>

  <ContainerMain>

    {/* STATISTICS */}
    <Statistics equipments={equipments}/>

    <ContainerMapAndTable>
      {/* MAP */}
      <Map equipments={equipments || []}/>

      <ContainerDateAndTable>
        {/* SELECT DATE */}
        <LocalizationProvider adapterLocale={ptBR} dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
              inputFormat="dd/MM/yyyy"
              value={selectedDate}
              onChange={handleChange}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                  <SelectedDate>
                    <input ref={inputRef} {...inputProps} />
                    {InputProps?.endAdornment}
                  </SelectedDate>
                )}
          />
        </LocalizationProvider>


        {/* TABLE */}
        <Table>
                <DataGrid
                    rows={equipments || []}
                    columns={columnsTableHome}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    getRowId={()=>Math.random()}
                    disableSelectionOnClick
                    disableDensitySelector
                    disableColumnMenu
                    disableVirtualization
                    style={styleTable}
                    components={{Toolbar: QuickSearchToolbar, Footer: CustomFooter, NoRowsOverlay: CustomNoRowsOverlay}}
                />
        </Table>
      </ContainerDateAndTable>
    </ContainerMapAndTable>


  </ContainerMain>
  </>)
}

export const  getServerSideProps: GetServerSideProps = async (context) => {
  // LAST POSITION DATE
  const lastPositionDate: string = await (await api.get('/api/lastPositionDate')).data
  return {  
    props: {lastPositionDate},
  }
}

export default Home
