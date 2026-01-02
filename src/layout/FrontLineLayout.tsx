// import React from 'react'

import { FrontLineSidebar } from "@/(frontline-staf-flow)/_components/FrontLineSidebar"
import { Outlet } from "react-router"

const FrontLineLayout = () => {
  return (
    <div>
        <FrontLineSidebar />
        <Outlet />
    </div>
  )
}

export default FrontLineLayout