import { ExecutiveSidebar } from "@/(executive-flow)/_components/ExecutiveSidebar"
import { Outlet } from "react-router"

const ExecutiveLayout = () => {
  return (
    <div>
        <ExecutiveSidebar />
        <Outlet />
    </div>
  )
}

export default ExecutiveLayout