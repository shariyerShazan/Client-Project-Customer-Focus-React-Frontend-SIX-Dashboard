
import { ClientAdminSidebar } from '@/(client-admin)/_components/ClientAdminSidebar'
import { Outlet } from 'react-router'


const ClientAdminLayout = () => {
  return (
    <div>
        <ClientAdminSidebar />
        <Outlet />
    </div>
  )
}

export default ClientAdminLayout