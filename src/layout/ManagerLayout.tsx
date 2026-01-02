
import { ManagerSidebar } from '@/(manager-flow)/_components/ManagerSidebar'
import { Outlet } from 'react-router'

const ManagerLayout = () => {
  return (
    <div>
        <ManagerSidebar />
        <Outlet />
    </div>
  )
}

export default ManagerLayout