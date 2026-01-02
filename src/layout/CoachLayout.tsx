import { CoachSidebar } from '@/(coach-flow)/_components/CoachSidebar'
import { Navbar } from '@/components/shared/navbar/Navbar'
// import React from 'react'
import { Outlet } from 'react-router'

const CoachLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
        <CoachSidebar />
       <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        <div className="p-4 lg:p-6">
          <Navbar
            title={"Executive"}
            subtitle={"Here's your service excellence overview for today" }
            notificationCount={2}
            user={{
              name: "Esther Howard",
              role: "Trainer",
              profilePic: "https://i.pravatar.cc/150?u=esther" 
            }}
          />

          <div className="mt-6">
            <Outlet />
          </div>
        </div>
        
      </main>
    </div>
  )
}


export default CoachLayout
