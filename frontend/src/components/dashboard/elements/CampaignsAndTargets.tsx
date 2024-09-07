import ElementsHeader from '../ElementsHeader'
import { Cell, Pie, PieChart } from 'recharts'
import { Box, Typography, useTheme } from '@mui/material'
import { FlexBetweenBox } from '@/styles/main'

const pieData = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 400 }
]

const CampaignsAndTargets = () => {
    const { palette } = useTheme();
    const pieColors = [palette.primary[800], palette.primary[300]];

    return (
        <>
        <ElementsHeader 
            title="Campaigns and Targets"
            sideText="+4%"
        />
        <FlexBetweenBox mt={"0.25rem"} gap={"1.5rem"} pr={"1rem"}>
            <PieChart 
                width={110} 
                height={100} 
                margin={{top: 0, right: -10, left: 10, bottom: 0}}
            >
                <Pie
                    stroke='none'
                    data={pieData}
                    innerRadius={18}
                    outerRadius={38}
                    paddingAngle={5}
                    dataKey="value"
                >
                {pieData && pieData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                ))}
                </Pie>
            </PieChart>

            <Box ml={"-0.7rem"} flexBasis={"40%"} textAlign={"center"}>
                <Typography variant='h5'>Target Sales</Typography>
                <Typography variant='h3' color={palette.primary[300]} m={"0.3rem 0"}>83</Typography>
                <Typography variant='h6'>Finance goals of the campaign that is desired</Typography>
            </Box>

            <Box flexBasis={"40%"}>
                <Typography variant='h5'>Losses in Revenue</Typography>
                <Typography variant='h6' >Losses are down 25%</Typography>
                <Typography variant='h5' mt={"0.4rem"}>Profit Margins</Typography>
                <Typography variant='h6' >Margins are up 30% from last month</Typography>
            </Box>
        </FlexBetweenBox>
        
        </>
    )
}

export default CampaignsAndTargets