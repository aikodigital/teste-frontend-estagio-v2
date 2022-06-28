// STYLES
import { ContainerNoRowsTable } from "@styles/home/table"

// CONFIG COLUMNS TABLE
export const columnsTableProfile = [
    { field: 'date', headerName: 'Data', width: 200 },
    { field: 'hour', headerName: 'Hora', width: 200 },
    { field: 'name', headerName: 'Estado', width: 200 },
]

// NO ROW TABLE
export function noRowsOverlayTableProfile() {
return (
    <ContainerNoRowsTable>
        <span>
        <p>Nenhum registro encontrado!</p>
        </span>
    </ContainerNoRowsTable>
)
}