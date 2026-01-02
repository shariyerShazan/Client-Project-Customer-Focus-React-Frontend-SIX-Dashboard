import ClientAdminBranchesManagement from "@/(client-admin)/pages/BranchesManagement/BranchesManagement";
import ClientAdminDashboard from "@/(client-admin)/pages/Dashboard/Dashboard";
import ClientAdminInvoiceManagement from "@/(client-admin)/pages/InvoiceManagement/InvoiceManagement";
import ClientAdminPlansAndPricing from "@/(client-admin)/pages/PlansPricing/PlansAndPricing";
import ClientAdminSettings from "@/(client-admin)/pages/Settings/Settings";
import ClientAdminSetupTemplate from "@/(client-admin)/pages/SetupTemplate/SetupTemplate";
import ClientAdminUsersManagement from "@/(client-admin)/pages/UsersManagement/UsersManagement";
// import ManageringLogs from "@/(manager-flow)/pages/ManageringLogs/ManageringLogs";
import ManagerDoshboard from "@/(manager-flow)/pages/dashboard/Doshboard";
import ManagerHuddles from "@/(manager-flow)/pages/Huddles/Huddles";
import ManagerSessionsManagement from "@/(manager-flow)/pages/SessionsManagement/SessionsManagement";
import ManagerSettings from "@/(manager-flow)/pages/Settings/Settings";
import ManagerTeamManagement from "@/(manager-flow)/pages/TeamManagement/TeamManagement";
import SuperAmdinAllPayments from "@/(super-admin)/pages/billing-management/pages/AllPayments/AllPayments";
import SuperAmdinManageSubscriptions from "@/(super-admin)/pages/billing-management/pages/ManageSubscriptions/ManageSubscriptions";
import SuperAmdinRevenueDashboard from "@/(super-admin)/pages/billing-management/pages/Revenue-Dashboard/RevenueDashboard";
import SuperAmdinManageTemplate from "@/(super-admin)/pages/manage-tamplate/ManageTemplate";
import SuperAdminOverview from "@/(super-admin)/pages/overview/Overview";
import SuperAmdinSetting from "@/(super-admin)/pages/settings/Setting";
import ErrorPage from "@/components/shared/errorPage/ErrorPage";
import ClientAdminLayout from "@/layout/ClientAdminLayout";
// import ManagerLayout from "@/layout/ManagerLayout";
import SuperAdminLayout from "@/layout/SuperAdminLayout";
import { createBrowserRouter } from "react-router";
import ManagerCoachingLogs from "@/(manager-flow)/pages/CoachingLogs/CoachingLogs";
import ManagerLayout from "@/layout/ManagerLayout";

const Routes = createBrowserRouter([
    {
        path : "super-admin/dashboard" ,
        element : <SuperAdminLayout /> ,
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
    }, 
    {
        path: "client-admin/dashboard" ,
        element : <ClientAdminLayout />,
        children: [
            {
                index: true,
                element: <ClientAdminDashboard />
            },
            {
                path : "Setup-Template" ,
                element : <ClientAdminSetupTemplate />
            } ,
            {
                path : "Branches-Management" ,
                element: <ClientAdminBranchesManagement />
            },
             {
                path: "Users-Management" ,
                element: <ClientAdminUsersManagement />
            } ,
            {
                path: "Invoice-Management" ,
                element: <ClientAdminInvoiceManagement />
            }, 
            {
                path: "Plans-Pricing" ,
                element : <ClientAdminPlansAndPricing />
            },
            {
                path: "settings" ,
                element : <ClientAdminSettings />
            }
        ]
    } ,
    {
        path: "Manager/dashboard" ,
        element: <ManagerLayout /> ,
        children : [
            {
                index: true ,
                element : <ManagerDoshboard />
            }, {
                path : "Huddles" ,
                element: <ManagerHuddles />
            }, 
            {
                path: "Coaching-Logs" ,
                element : <ManagerCoachingLogs />
            },
            {
                path : "Team-Management" ,
                element : <ManagerTeamManagement /> 
            }, 
            {
                path: "Sessions-Management" ,
                element : <ManagerSessionsManagement />
            },
            {
                path : "Settings" ,
                element: <ManagerSettings />
            }
        ]
    },
    {
        path : "*" ,
        element: <ErrorPage />
    }
])

export default Routes