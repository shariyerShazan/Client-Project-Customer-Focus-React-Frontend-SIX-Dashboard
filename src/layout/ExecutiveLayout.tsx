import { ExecutiveSidebar } from "@/(executive-flow)/_components/ExecutiveSidebar"
import { Navbar } from "@/components/shared/navbar/Navbar"
import { Outlet } from "react-router"

const ExecutiveLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
        <ExecutiveSidebar />
       <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        <div className="p-4 ">
          <div className="ml-10 md:ml-0">
             <Navbar
            title={"Executive"}
            subtitle={"Here's your service excellence overview for today" }
            notificationCount={2}
            user={{
              name: "Esther Howard",
              role: "Executive",
              profilePic: "https://i.pravatar.cc/150?u=esther" 
            }}
          />
          </div>

          <div className="mt-6">
            <Outlet />
          </div>
        </div>
        
      </main>
    </div>
  )
}

export default ExecutiveLayout



