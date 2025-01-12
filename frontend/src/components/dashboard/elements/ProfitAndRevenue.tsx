import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import { LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line, CartesianGrid, Legend } from "recharts"
import ElementsHeader from "../ElementsHeader";
import Loading from "@/components/common/Loading";

const ProfitAndRevenue = () => {
    const { palette } = useTheme();
    const { data } = useGetKpisQuery();
    
    const operationalExpenses = useMemo(() => {
        return (
            data && data[0]?.monthlyData?.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0,3),
                    revenue: revenue,
                    profit: (revenue - expenses).toFixed(2),
                }
            })
        )
    }, [data]);

    if (!data) return <Loading />

    return (
        <>
        <ElementsHeader 
            title="Profit and Revenue"
            subtitle="top line represents profit, bottom line represents revenue"
            sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="95%">
            <LineChart
                width={500}
                height={400}
                data={operationalExpenses}
                margin={{top: 20, right: 0, left: -10, bottom: 55}}
            >
                <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                <XAxis 
                    dataKey="name" 
                    tickLine={false} 
                    style={{ fontSize:'10px' }} 
                />
                <YAxis 
                    yAxisId={'left'}
                    orientation={'left'}
                    axisLine={false} 
                    tickLine={false} 
                    style={{ fontSize:'10px' }} 
                />
                <YAxis 
                    yAxisId={'right'}
                    orientation={'right'}
                    axisLine={false} 
                    tickLine={false} 
                    style={{ fontSize:'10px' }} 
                />
                <Tooltip />
                <Legend 
                    height={20}
                    wrapperStyle={{
                        margin:'0 0 10px 0'
                    }}
                />
                <Line 
                    yAxisId={'left'}
                    type={'monotone'}
                    dataKey={'profit'}
                    stroke={palette.tertiary[500]}
                />
                <Line 
                    yAxisId={'right'}
                    type={'monotone'}
                    dataKey={'revenue'}
                    stroke={palette.primary.main}
                />
            </LineChart>
        </ResponsiveContainer>
        </>
    )
}

export default ProfitAndRevenue