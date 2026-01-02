import SuperAmdinAllPayments from "@/(super-admin)/pages/billing-management/pages/AllPayments/AllPayments";
import SuperAmdinManageSubscriptions from "@/(super-admin)/pages/billing-management/pages/ManageSubscriptions/ManageSubscriptions";
import SuperAmdinRevenueDashboard from "@/(super-admin)/pages/billing-management/pages/Revenue-Dashboard/RevenueDashboard";
import SuperAmdinManageTemplate from "@/(super-admin)/pages/manage-tamplate/ManageTemplate";
import SuperAdminOverview from "@/(super-admin)/pages/overview/Overview";
import SuperAmdinSetting from "@/(super-admin)/pages/settings/Setting";

import ErrorPage from "@/components/shared/errorPage/ErrorPage";
import SuperAdminLayout from "@/layout/SuperAdminLayout";
import { createBrowserRouter } from "react-router";

const Routes = createBrowserRouter([
    {
        path : "super-admin/dashboard" ,
        element : <SuperAdminLayout /> ,
        errorElement : <ErrorPage /> ,
        children : [
            {
                index : true ,
                element : <SuperAdminOverview />
            }, 
            {
                path: "Manage-Templates" ,
                element: <SuperAmdinManageTemplate />
            } ,
            {
                path : "Revenue-Dashboard",
                element : <SuperAmdinRevenueDashboard />
            } ,
            {
                path: "Manage-Subscriptions" , 
                element : <SuperAmdinManageSubscriptions />
            } , 
            {
               path : "All-Payments" ,
               element : <SuperAmdinAllPayments />
            } ,
            {
                path : "settings" ,
                element: <SuperAmdinSetting />
            }
       ]
    }
])

export default Routes