import { Box, Divider, useMediaQuery } from "@mui/material";
import { gridTemplateLargeScreens, gridTemplateSmallScreens } from "@/useful/grid";
import Row1 from "@/components/dashboard/Row1";
import Row2 from "@/components/dashboard/Row2";
import Row3 from "@/components/dashboard/Row3";

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      mb={2}
      gap="1.5rem"
      sx=
      { isAboveMediumScreens
        ? {
            gridTemplateColumns: "repeat(3, minmax(270px, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplateLargeScreens,
          }
        : {
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreens,
          }
      }
    >
        <Row1 />
        <Row2 />
        <Row3 />
        <Divider sx={{marginTop:'10px'}}/>
    </Box>
    
  );
};

export default Dashboard;