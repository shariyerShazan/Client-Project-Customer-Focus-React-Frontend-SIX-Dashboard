// import React from 'react'

import { FrontLineSidebar } from "@/(frontline-staf-flow)/_components/FrontLineSidebar"
import { Navbar } from "@/components/shared/navbar/Navbar"
import { Outlet } from "react-router"

const FrontLineLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
        <FrontLineSidebar />
       <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        <div className="p-4 lg:p-6">
          <Navbar
            title={"Frontline Staff"}
            subtitle={"Complete your habits • practice roleplays • share feedback" }
            notificationCount={2}
            user={{
              name: "Esther Howard",
              role: "Frontline Staff",
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

export default FrontLineLayout




