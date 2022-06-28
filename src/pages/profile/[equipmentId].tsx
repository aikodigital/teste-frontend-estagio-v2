import { DataGrid } from '@mui/x-data-grid'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { GetServerSideProps, NextPage } from 'next' 
import { useEffect, useState } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ptBR } from 'date-fns/locale'
import { format } from 'date-fns'
import dynamic from 'next/dynamic'
// COMPONENTS
const Map = dynamic( () => import('@components/profile/Map'), { ssr: false })
import Menu from '@components/Menu'
import HeadPage from '@components/HeadPage'
import ProfileInfo from '@components/profile/ProfileInfo'
import Statistics from '@components/profile/Statistics' 
import { columnsTableProfile, noRowsOverlayTableProfile } from '@components/profile/config/table'
import { CustomFooter } from '@components/table/config'
// STYLES
import { ContainerMain } from '@styles/container'
import { ContainerMap, ContainerProfileAndStatistics, SelectedDate, Table, WrapperProfileAndMap } from '@styles/profile'
import { styleTable } from '@styles/home/table'
// TYPES
import { iEquipments, iResponseEquipmentAll } from 'src/@types/api'
import { iProfile } from 'src/@types/pages'
// SERVICES
import { api } from 'src/services/api'
import { vehiclesProfile } from 'src/services/vehicles' 

const Profile: NextPage<iProfile> = ({equipment}) => {

// PROFILE
const equipmentProfile = {
    name: equipment.name,
    model: equipment.model.name,
    state: equipment.state
}

// DATA ROWS
const [dataRows, setDataRows] = useState<iResponseEquipmentAll | undefined>()
const rows = dataRows?.stateHistory?.map( (data) => {
    return ({ 
        date: format(new Date(data.date), 'dd/MM/yyyy'), 
        name: data.name, 
        hour: data.date.substring(19,11)
    })
})

// MAP
const mapPositions = {
    statePosition: dataRows?.positionHistory,
    model: equipment.model.name,
}

// STATISTICS
const statistics = {
    stateHistory: dataRows?.stateHistory,
    hourlyEarnings: equipment.model.hourlyEarnings
}

// DATA SELECT
const [selectedDate, setValue] = useState<Date | null>(new Date(equipment.position || ''))
const handleChange = (newValue: Date | null) => {setValue(newValue)}
 
useEffect(()=>{
    // DATE FORMAT
    let dateFormat = format(new Date(selectedDate as Date), 'dd-MM-yyyy')

    // DATA EQUIMENT ALL
    api.get(`/api/equipmentAll/${equipment.id}/${dateFormat}`)
    .then( ({data}) => setDataRows(data) )
    .catch( (error) => console.log('Erro: '+error))

},[equipment, selectedDate])

    return(<>
    <HeadPage titlePage={equipmentProfile.name}/>
    <Menu/>
    <ContainerMain> 

        <WrapperProfileAndMap>
            <ContainerProfileAndStatistics>

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

                {/* PROFILE */}
                <ProfileInfo 
                    equipmentInfo={equipmentProfile} 
                    vehicleImg={vehiclesProfile(equipment.model.name || '')}
                    nameImg={equipment.model.name} 
                />

                {/* STATISTICS */}
                <Statistics dataStatistics={statistics}/>

            </ContainerProfileAndStatistics>
        
            {/* MAP */}
            <ContainerMap>
                <Map equipments={mapPositions} />
            </ContainerMap>
        </WrapperProfileAndMap>

        {/* TABLE */}
        <Table>
            <DataGrid
                rows={rows || []}
                columns={columnsTableProfile}
                pageSize={5}
                rowsPerPageOptions={[5]}
                getRowId={()=>Math.random()}
                disableSelectionOnClick
                disableDensitySelector
                disableColumnMenu
                disableVirtualization
                style={styleTable}
                components={{Footer: CustomFooter, NoRowsOverlay: noRowsOverlayTableProfile}}
            />
        </Table>
 
    </ContainerMain>
    </>)
}

// GET SERVER SIDE PROPS
export const getServerSideProps: GetServerSideProps = async (context) => {

    const equipmentId: string | string[] | undefined = context.params?.equipmentId

    // EQUIPMENT
    const equipment: iEquipments = await (await api.get(`/api/equipment/${equipmentId}`)).data[0]

    return {
        props: {equipment},
    }
}

export default Profile