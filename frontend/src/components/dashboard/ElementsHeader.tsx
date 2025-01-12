import { FlexBetweenBox } from "@/styles/main"
import { Box, Typography, useTheme } from "@mui/material"

type Props = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  sideText: string;
}

const ElementsHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();

  return (
    <FlexBetweenBox color={palette.grey[400]} margin={'1.5rem 1rem 0 1rem'}>
      <FlexBetweenBox>
        {icon}
        <Box width={'100%'}>
          <Typography variant="h4" mb={'-0.1rem'}>
            {title}
          </Typography>
          <Typography variant="h6">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetweenBox>
      <Typography variant="h5" fontWeight={700} color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetweenBox>
  )
}

export default ElementsHeader