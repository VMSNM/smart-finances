import { Link, Box, Typography, useTheme } from '@mui/material';
import { FlexBetweenBox } from '@/styles/main';
import PixIcon from '@mui/icons-material/Pix';
import { useLocation } from 'react-router-dom';
/* import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; */

const Navbar = () => {
    const { palette } = useTheme();
    const location = useLocation();

    return (
        <FlexBetweenBox mb={"0.25rem"} p={"0.5rem 0"} color={palette.grey[300]}>
            <FlexBetweenBox gap={"0.75rem"}>
                <PixIcon sx={{ fontSize:"28px" }} />
                <Typography variant='h4' fontSize={'16px'}>
                    Smart Finances
                    </Typography>
            </FlexBetweenBox>
            <FlexBetweenBox gap={'2rem'}>
                <Box sx={{ color: palette.primary[100], "&:hover": { color: palette.primary[100] } }}>
                    <Link
                        href="/"
                        style={{
                        color: location?.pathname === "/" ? "inherit" : palette.grey[700],
                        textDecoration: "inherit",
                        }}
                    >
                        dashboard
                    </Link>
                </Box>
                <Box sx={{ color: palette.primary[100], "&:hover": { color: palette.primary[100] } }}>
                    <Link
                        href="/predictions"
                        style={{
                        color: location?.pathname === "/predictions" ? "inherit" : palette.grey[700],
                        textDecoration: "inherit",
                        }}
                    >
                        predictions
                    </Link>
                </Box>
            </FlexBetweenBox>
        </FlexBetweenBox>
    )
}

export default Navbar