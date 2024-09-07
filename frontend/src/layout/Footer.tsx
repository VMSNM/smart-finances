import { Box, Link, Stack, Typography, useTheme } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <Box 
            width={'100%'}
            flexGrow={1} 
            
            mt={6}
            pt={3}
            borderTop={`1px solid ${palette.grey[800]}`}
            
        >
            <Link href={'http://www.smart-center.pt'} target="_blank" sx={{textDecoration:'none'}}>
                <Stack direction={'row'} gap={.5} alignItems={'center'} justifyContent={'center'}>
                    <CopyrightIcon sx={{color: palette.grey[500], ':hover': {color: palette.primary[100]}}}  />
                    <Typography variant='h5' sx={{color: palette.grey[500], ':hover': {color: palette.primary[100]}}}>Coded by Smart Informática</Typography>
                </Stack>
            </Link>
        </Box>
    )
}

export default Footer