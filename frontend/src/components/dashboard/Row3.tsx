import { DashboardBox } from "@/styles/main"
import ListOfProducts from "./elements/ListOfProducts"
import LatestTransactions from "./elements/LatestTransactions"
import ExpensesByCategory from "./elements/ExpensesByCategory"
import OveralSummary from "./elements/OveralSummary"

const Row3 = () => {
  return (
    <>
        <DashboardBox gridArea={'g'}><ListOfProducts /></DashboardBox>
        <DashboardBox gridArea={'h'}><LatestTransactions /></DashboardBox>
        <DashboardBox gridArea={'i'}><ExpensesByCategory /></DashboardBox>
        <DashboardBox gridArea={'j'}><OveralSummary /></DashboardBox>
    </>
  )
}

export default Row3