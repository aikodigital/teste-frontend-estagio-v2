import { Pagination } from "@mui/material";
import { gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from "@mui/x-data-grid";
import { ContainerPagination } from "@styles/home/table";

// BUTTON EXPORT AND PAGINATION TABLE
export function CustomFooter() {

    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
        <ContainerPagination>
          <Pagination
          color="primary"
          count={pageCount}
          page={page + 1}
          onChange={(event, value) => apiRef.current.setPage(value - 1)}
        /> 
        </ContainerPagination>
    )
  }