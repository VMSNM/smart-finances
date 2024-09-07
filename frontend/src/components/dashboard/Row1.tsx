import { DashboardBox } from "@/styles/main"
import RevenueAndExpenses from "./elements/RevenueAndExpenses";
import ProfitAndRevenue from "./elements/ProfitAndRevenue";
import RevenueByMonth from "./elements/RevenueByMonth";

const Row1 = () => {

  return (
    <>
        <DashboardBox gridArea={'a'}><RevenueAndExpenses /></DashboardBox>
        <DashboardBox gridArea={'b'}><ProfitAndRevenue /></DashboardBox>
        <DashboardBox gridArea={'c'}><RevenueByMonth /></DashboardBox>
    </>
  )
}

export default Row1