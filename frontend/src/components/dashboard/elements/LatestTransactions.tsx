import { useGetTransactionsQuery } from "@/state/api";
import ElementsHeader from "../ElementsHeader";
import { Box } from "@mui/material";
import { GridCellParams } from "@mui/x-data-grid";
import { StyledDataGrid } from "@/styles/data-grid-tables";
import Loading from "@/components/common/Loading";

const transactionColumns = [
    {
        field: "_id",
        headerName: "id",
        headerClassName: 'table-header',
        flex: 1
    },
    {
        field: "buyer",
        headerName: "Buyer",
        headerClassName: 'table-header',
        flex: 0.67,
    },
    {
        field: "amount",
        headerName: "Amount",
        headerClassName: 'table-header',
        flex: 0.5,
        renderCell: (params: GridCellParams) => `$${params.value}`
    },
    {
        field: "productIds",
        headerName: "Count",
        headerClassName: 'table-header',
        flex: 0.5,
        renderCell: (params: GridCellParams) => (params.value as Array<string>).length
    }
]

const LatestTransactions = () => {
    const { data: transactionData } = useGetTransactionsQuery();
    
    if (!transactionData) return <Loading />

    return (
        <>
        <ElementsHeader 
            title="Recent Orders"
            sideText={`${transactionData?.length} latest transactions`}
        />
        <Box
            mt={'1rem'}
            p={'0 0.5rem'}
            height={'75%'}
        >
            <StyledDataGrid 
                columnHeaderHeight={25}
                rowHeight={35}
                hideFooter={true}
                rows={transactionData || []}
                columns={transactionColumns}
            />
        </Box>
        </>
    )
}

export default LatestTransactions;