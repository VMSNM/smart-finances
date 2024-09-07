import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// TYPOGRAPHY
export const StyledDataGrid = styled(DataGrid, {
    shouldForwardProp: (props) => props !== 'wantedColor'
})(({ theme }) => ({
    border: "none !important",

    "&.MuiDataGrid-root": {
        color: theme.palette.grey[300],
    },
    '& .table-header': {
        backgroundColor: "#2a2b2f !important",
        borderBottom: `1px solid ${theme.palette.grey[800]} !important`,
    },
    "&.MuiDataGrid-columnSeparator": {
        visibility: "hidden",
    },
    "& .MuiDataGrid-cell": {
        border: 'none !important',
        borderBottom: `1px solid ${theme.palette.grey[800]} !important`,
    },
    "& .MuiDataGrid-cell:focus-within": { // Works
        outline: 'none !important'
    },
    "& .MuiDataGrid-columnHeaders": {
        background: `#fff !important`
    },
}));