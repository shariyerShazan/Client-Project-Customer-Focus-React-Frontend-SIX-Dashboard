import AllPayments from "@/(super-admin)/pages/billing-management/pages/AllPayments/AllPayments";
import ManageSubscriptions from "@/(super-admin)/pages/billing-management/pages/ManageSubscriptions/ManageSubscriptions";
import RevenueDashboard from "@/(super-admin)/pages/billing-management/pages/Revenue-Dashboard/RevenueDashboard";
import ManageTemplate from "@/(super-admin)/pages/manage-tamplate/ManageTemplate";
import SuperAdminOverview from "@/(super-admin)/pages/overview/Overview";
import Setting from "@/(super-admin)/pages/setting/Setting";
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
                element: <ManageTemplate />
            } ,
            {
                path : "Revenue-Dashboard",
                element : <RevenueDashboard />
            } ,
            {
                path: "Manage-Subscriptions" , 
                element : <ManageSubscriptions />
            } , 
            {
               path : "All-Payments" ,
               element : <AllPayments />
            } ,
            {
                path : "settings" ,
                element: <Setting />
            }
       ]
    }
])

export default Routes