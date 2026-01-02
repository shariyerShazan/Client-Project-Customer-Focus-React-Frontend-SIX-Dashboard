import { CoachSidebar } from '@/(coach-flow)/_components/CoachSidebar'
// import React from 'react'
import { Outlet } from 'react-router'

const CoachLayout = () => {
  return (
    <div>
        <CoachSidebar />
        <Outlet />
    </div>
  )
}

export default CoachLayout