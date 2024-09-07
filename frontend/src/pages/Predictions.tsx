import { useGetKpisQuery } from "@/state/api";
import { DashboardBox, FlexBetweenBox } from "@/styles/main";
import { Box, Button, Typography, useTheme } from "@mui/material"
import { useMemo, useState } from "react";
import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import regression, { DataPoint } from 'regression';

const Predictions = () => {
  const { palette } = useTheme();
  const [isPredictions, setIsPredictions] = useState(true);

  const { data: kpiData } = useGetKpisQuery();

  const chartData = useMemo(() => {
    if (!kpiData) return [];
    const monthData = kpiData[0].monthlyData;
    const formatted: Array<DataPoint> = monthData.map(({ revenue }, idx: number) => {
      return [idx, revenue]
    });
    const regressionLine = regression.linear(formatted);

    return monthData.map(({ month, revenue }, idx: number) => {
      return {
        name: month,
        "Actual Revenue": revenue,
        "Regression Line": regressionLine.points[idx][1],
        "Predicted Revenue": regressionLine.predict(idx + 12)[1],
      }
    })
  }, [kpiData]);

  return (
    <DashboardBox
      width={'100%'}
      height={'100%'}
      p={'1rem'}
      overflow={'hidden'}
    >
      <FlexBetweenBox m={'1rem 2.5rem'} gap={'1rem'}>
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography variant="h6">charted and predicted revenue based on a simple regression model</Typography>
        </Box>
        <Button
          onClick={() => setIsPredictions(!isPredictions)}
          sx={{
            color: palette.grey[900],
            bgcolor: palette.grey[700],
            boxShadow: '.1rem .1rem .1rem .1rem rgba(0,0,0,0.4)'
          }}
        >
          {!isPredictions ? 'Show predicted revenue for next year' : 'Hide predicted revenue for next year'}
        </Button>
      </FlexBetweenBox>
      <ResponsiveContainer width="100%" height="95%">
        <LineChart
            width={500}
            height={400}
            data={chartData}
            margin={{top: 20, right: 75, left: 20, bottom: 80}}
        >
            <CartesianGrid strokeDasharray={'3 3'} stroke={palette.grey[800]} />
            <XAxis 
                dataKey="name" 
                tickLine={false} 
                style={{ fontSize:'10px' }} 
            >
              <Label value={'Month'} offset={-5} position={'insideBottom'} />
            </XAxis>
            <YAxis 
                domain={[12000, 30000]}
                orientation={'left'}
                axisLine={false} 
                style={{ fontSize:'10px' }} 
                tickFormatter={(v) => `$${v}`}
            >
              <Label value={'Revenue in USD'} angle={-90} offset={-5} position={'insideLeft'} />
            </YAxis>
            <YAxis 
                orientation={'right'}
                axisLine={false} 
                tickLine={false} 
                style={{ fontSize:'10px' }} 
            />
            <Tooltip />
            <Legend 
                verticalAlign="top"
            />
            <Line 
                type={'monotone'}
                dataKey={'Actual Revenue'}
                stroke={palette.primary.main}
                strokeWidth={0}
                dot={{ strokeWidth: 5 }}
            />
            <Line 
                type={'monotone'}
                dataKey={'Regression Line'}
                stroke='#8884D8'
                dot={false}
            />

            { isPredictions && (
              <Line 
                strokeDasharray={'5 5'}
                dataKey={'Predicted Revenue'}
                stroke={palette.secondary[500]}
              />
            )}
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  )
}

export default Predictions