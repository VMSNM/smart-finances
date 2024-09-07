import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import { LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line, CartesianGrid } from "recharts"
import ElementsHeader from "../ElementsHeader";
import Loading from "@/components/common/Loading";

const OperationalVsNonOperational = () => {
    const { palette } = useTheme();
    const { data } = useGetKpisQuery();
    
    const operationalExpenses = useMemo(() => {
        return (
            data && data[0]?.monthlyData?.map(({ month, operationalExpenses, nonOperationalExpenses }) => {
                return {
                    name: month.substring(0,3),
                    "Operational Expenses": operationalExpenses,
                    "Non Operational Expenses": nonOperationalExpenses
                }
            })
        )
    }, [data]);

    if (!data) return <Loading />

    return (
        <>
        <ElementsHeader 
            title="Operational vs Non-Operational Expenses"
            sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
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
                <Line 
                    yAxisId={'left'}
                    type={'monotone'}
                    dataKey={'Non Operational Expenses'}
                    stroke={palette.tertiary[500]}
                />
                <Line 
                    yAxisId={'right'}
                    type={'monotone'}
                    dataKey={'Operational Expenses'}
                    stroke={palette.primary.main}
                />
            </LineChart>
        </ResponsiveContainer>
        </>
    )
}

export default OperationalVsNonOperational