import { SuperAdminSidebar } from '@/(super-admin)/_components/SuperAdminSidebar'
import { Outlet } from 'react-router'


const SuperAdminLayout = () => {
  return (
    <div>
        <SuperAdminSidebar />
        <Outlet />
    </div>
  )
}

export default SuperAdminLayout