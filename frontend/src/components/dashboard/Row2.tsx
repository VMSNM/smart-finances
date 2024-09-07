import { DashboardBox } from "@/styles/main"
import OperationalVsNonOperational from "./elements/OperationalVsNonOperational"
import CampaignsAndTargets from "./elements/CampaignsAndTargets"
import ProductPricesExpenses from "./elements/ProductPricesExpenses"

const Row2 = () => {
  return (
    <>
        <DashboardBox gridArea={'d'}><OperationalVsNonOperational /></DashboardBox>
        <DashboardBox gridArea={'e'}><CampaignsAndTargets /></DashboardBox>
        <DashboardBox gridArea={'f'}><ProductPricesExpenses /></DashboardBox>
    </>
  )
}

export default Row2