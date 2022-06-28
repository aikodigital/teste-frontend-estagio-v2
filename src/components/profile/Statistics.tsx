import { differenceInHours } from "date-fns" 
// COMPONENTS
import { AbstractOneIcon, AbstractTwoIcon } from "@components/icons"
// STYLES
import { Statistic } from "@styles/home/statistics"
import { Container } from "@styles/profile/statistics"
// TYPES
import { iStatisticsProfile } from "src/@types/components";



const Statistics = ({dataStatistics}: iStatisticsProfile): JSX.Element => {
    // PRODUCTIVITY
    function productivity(){
        const indexLastStateHistory = ((dataStatistics?.stateHistory?.length || 0) - 1)
        const operations: Array<number> = []
        const maintenance: Array<number> = []
        
        for(let num = 0; num < (dataStatistics?.stateHistory?.length || 0); num++){
            // LAST DATE POSITION - OPERATIONS
            if(dataStatistics?.stateHistory?.[num]?.name === 'Operando' && num === indexLastStateHistory){
                operations.push(
                    differenceInHours(
                        new Date(dataStatistics?.stateHistory?.[0].date.substring(0,11)+'24:00:00.000Z'), 
                        new Date(dataStatistics?.stateHistory?.[num].date)
                    ))
            }
            // POSITION OF THE OTHER DATES - OPERATIONS
            if(dataStatistics?.stateHistory?.[num]?.name === 'Operando' && num !== indexLastStateHistory){
                operations.push(
                    differenceInHours(
                        new Date(dataStatistics?.stateHistory?.[num + 1]?.date), 
                        new Date(dataStatistics?.stateHistory?.[num].date)
                    ))
            }
            // LAST DATE POSITION - MAINTENANCE
            if(dataStatistics?.stateHistory?.[num]?.name === 'Manutenção' && num === indexLastStateHistory){
                maintenance.push(
                    differenceInHours(
                        new Date(dataStatistics?.stateHistory?.[0].date.substring(0,11)+'24:00:00.000Z'), 
                        new Date(dataStatistics?.stateHistory?.[num].date)
                    ))
            }
            // POSITION OF THE OTHER DATES - MAINTENANCE
            if(dataStatistics?.stateHistory?.[num]?.name === 'Manutenção' && num !== indexLastStateHistory){
                maintenance.push(
                    differenceInHours(
                        new Date(dataStatistics?.stateHistory?.[num + 1]?.date), 
                        new Date(dataStatistics?.stateHistory?.[num].date)
                    ))
            }
        }
        
        // SUM HOURS
        const sumHoursOperations = operations.reduce( (previousValue: number, currentValue: number) => previousValue + currentValue, 0)
        const sumHoursMaintenance = maintenance.reduce( (previousValue: number, currentValue: number) => previousValue + currentValue, 0)

        // HOURLY STATE
        const hourlyState = (state: string) => {
            return dataStatistics.hourlyEarnings?.find( (hourly)=>{
                return hourly.state === state
            })?.value
        }

        // PRODUCTIVITY FORMULA
        const productivityOperation = (sumHoursOperations / 24 * 100).toFixed(2)
        const productivityMaintenance = Number(sumHoursOperations * (hourlyState('Operando') || 0)) + Number(sumHoursMaintenance * (hourlyState('Manutenção') || 0))

        return {productivityOperation, productivityMaintenance}
    }
 
    return(
    <Container>
            <Statistic themeColor={'red'}>
                <span>OEE</span>
                <p>{productivity().productivityMaintenance}</p>
                <AbstractOneIcon/>
            </Statistic>

            <Statistic themeColor={'orange'}>
                <span>Produtividade</span>
                <p>{productivity().productivityOperation+'%'}</p>
                <AbstractTwoIcon/>
            </Statistic>
    </Container>
    )
}

export default Statistics