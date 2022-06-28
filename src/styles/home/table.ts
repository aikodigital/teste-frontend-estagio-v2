import styled from "styled-components"

/* TABLE */
export const Table = styled.div`
    height: 615px;
    width: 100%;
    margin-bottom: 50px;

    // REMOVE OUTLINE BLUE
    .css-r11z79-MuiDataGrid-root .MuiDataGrid-columnHeader:focus, .css-r11z79-MuiDataGrid-root .MuiDataGrid-cell:focus {
        outline: none;
    }
    .css-r11z79-MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, .css-r11z79-MuiDataGrid-root .MuiDataGrid-cell:focus-within {
        outline: none;
    }
`

/* SEARCH */
export const Search = styled.div`
    padding: 5px 10px;

    & > div {
        border: none;
        width: 100%;
    }
`

/* NO ROWS TABLE */
export const ContainerNoRowsTable = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    font-size: 1rem;
`

/* PAGINATION */
export const ContainerPagination = styled.div`
    padding: 5px;
    display: flex;
    justify-content: flex-end;
`

// TABLE
export const styleTable = { boxShadow: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 10%) 0px 16px 32px -4px', border: 'none', borderRadius: '16px', height: '100%'}



