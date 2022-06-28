// COMPONENTS
import { Container, Statistic } from '@styles/home/statistics'
import { AbstractFourIcon, AbstractOneIcon, AbstractThreeIcon, AbstractTwoIcon } from '@components/icons'
// TYPES
import { iStatistics } from 'src/@types/components'
import { iEquipments } from 'src/@types/api'

const Statistics = ({equipments}:iStatistics): JSX.Element => {

    // OPERATING COUNT
    const operatingCount: number = equipments?.filter( (equipment: iEquipments) =>{
    return equipment.state === 'Operando'}).length || 0
    // MAINTENANCE COUNT
    const maintenanceCount: number = equipments?.filter( (equipment: iEquipments) =>{
    return equipment.state === 'Manutenção'}).length || 0
    // STOP COUNT
    const stopCount: number = equipments?.filter( (equipment: iEquipments) =>{
    return equipment.state === 'Parado'}).length || 0
    // EQUIPMENTS COUNT
    const equipmentsCount: number = equipments?.length || 0

    return(
    <Container>
        <Statistic themeColor={'purple'}>
            <span>Equipamentos</span>
            <p>{equipmentsCount}</p> 
            <AbstractThreeIcon/>
        </Statistic>

        <Statistic themeColor={'blue'}>
            <span>Operando</span>
            <p>{operatingCount}</p> 
            <AbstractFourIcon/>
        </Statistic>
        
        <Statistic themeColor={'orange'}>
            <span>Manutenção</span>
            <p>{maintenanceCount}</p>
            <AbstractTwoIcon/>
        </Statistic>
        
        <Statistic themeColor={'red'}>
            <span>Parado</span>
            <p>{stopCount}</p> 
            <AbstractOneIcon/>
        </Statistic>
    </Container>
    )
}

export default Statistics