import ElementsHeader from '../ElementsHeader'
import { Cell, Pie, PieChart } from 'recharts'
import { Stack, Typography, useTheme } from '@mui/material'
import { FlexBetweenBox } from '@/styles/main'
import { useMemo } from 'react'
import { useGetKpisQuery } from '@/state/api'
import Loading from '@/components/common/Loading'

const ExpensesByCategory = () => {
    const { palette } = useTheme();
    const pieColors = [palette.primary[800], palette.primary[300]];

    const { data: kpiData } = useGetKpisQuery();

    const pieChartData = useMemo(() => {
        if (!kpiData) return [];
        const totalExpenses = kpiData[0].totalExpenses;
        return Object.entries(kpiData[0].expensesByCategory).map(([key, value]) => {
            return [
                {
                    name: key,
                    value: value
                },
                {
                    name: `${key} of Total`,
                    value: totalExpenses - value
                }
            ]
        })
    }, [kpiData]);

    if (!kpiData) return <Loading />

    return (
        <>
        <ElementsHeader 
            title="Expense Breakdown by Category"
            sideText="+10%"
        />
        <FlexBetweenBox mt={"0.25rem"} gap={"0.5rem"} p={"0 1rem"}>
            { pieChartData?.map((data, idx) => (
                <Stack justifyContent={'center'} alignItems={'center'} key={`${data[0]?.name}-${idx}`}>
                    <PieChart 
                        width={90} 
                        height={75} 
                    >
                        <Pie
                            stroke='none'
                            data={data}
                            innerRadius={16}
                            outerRadius={30}
                            paddingAngle={4}
                            dataKey="value"
                        >
                        {data && data.map((_entry, idx) => (
                            <Cell key={`cell-${idx}`} fill={pieColors[idx]} />
                        ))}
                        </Pie>
                    </PieChart>
                    <Typography variant='h5'>{data[0]?.name}</Typography>
                </Stack>
            ))}
        </FlexBetweenBox>
        
        </>
    )
}

export default ExpensesByCategory