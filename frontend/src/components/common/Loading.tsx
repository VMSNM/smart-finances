import { Box, CircularProgress } from "@mui/material"

const Loading = () => {
  return (
    <Box mt={2} display={'flex'} justifyContent={'center'}> 
        <CircularProgress />
    </Box>
  )
}

export default Loading;