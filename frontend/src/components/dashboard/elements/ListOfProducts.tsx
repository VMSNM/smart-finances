import { useGetProductsQuery } from "@/state/api";
import ElementsHeader from "../ElementsHeader";
import { Box } from "@mui/material";
import { GridCellParams } from "@mui/x-data-grid";
import { StyledDataGrid } from "@/styles/data-grid-tables";
import Loading from "@/components/common/Loading";

const productColumns = [
    {
        field: "_id",
        headerName: "id",
        headerClassName: 'table-header',
        flex: 1
    },
    {
        field: "expense",
        headerName: "Expense",
        headerClassName: 'table-header',
        flex: 0.5,
        renderCell: (params: GridCellParams) => `$${params.value}`
    },
    {
        field: "price",
        headerName: "Price",
        headerClassName: 'table-header',
        flex: 0.5,
        renderCell: (params: GridCellParams) => `$${params.value}`
    }
]

const ListOfProducts = () => {
    const { data: productData } = useGetProductsQuery();
    
    if (!productData) return <Loading />

    return (
        <>
        <ElementsHeader 
            title="List of Products"
            sideText={`${productData?.length} products`}
        />
        <Box
            mt={'0.5rem'}
            p={'0 0.5rem'}
            height={'75%'}
        >
            <StyledDataGrid 
                columnHeaderHeight={25}
                rowHeight={35}
                hideFooter={true}
                rows={productData || []}
                columns={productColumns}
            />
        </Box>
        </>
    )
}

export default ListOfProducts;