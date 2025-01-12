import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import { ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts"
import ElementsHeader from "../ElementsHeader";
import Loading from "@/components/common/Loading";

const RevenueByMonth = () => {
    const { palette } = useTheme();
    const { data } = useGetKpisQuery();
    
    const revenue = useMemo(() => {
        return (
            data && data[0]?.monthlyData?.map(({ month, revenue }) => {
                return {
                    name: month.substring(0,3),
                    revenue: revenue,
                }
            })
        )
    }, [data]);

    if (!data) return <Loading />

    return (
        <>
        <ElementsHeader 
            title="Revenue Month by Month"
            subtitle="graph representing the revenue month by month"
            sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={revenue}
                margin={{top: 17, right: 15, left: -5, bottom: 58}}
            >
                <defs>
                    <linearGradient id='colorRevenue' x1={0} y1={0} x2={0} y2={1}>
                        <stop offset={'5%'} stopColor={palette.primary[300]} stopOpacity={0.8} />
                        <stop offset={'95%'} stopColor={palette.primary[300]} stopOpacity={0} />
                    </linearGradient>
                </defs>

                <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    style={{fontSize:'10px'}} 
                />
                <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    style={{fontSize:'10px'}} 
                />
                <Tooltip />
                <Bar 
                    dataKey="revenue" 
                    fill="url(#colorRevenue)" 
                />
            </BarChart>
        </ResponsiveContainer>
        </>
    )
}

export default RevenueByMonth;