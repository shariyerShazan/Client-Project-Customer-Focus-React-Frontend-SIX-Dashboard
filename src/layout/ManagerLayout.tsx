
import { ManagerSidebar } from '@/(manager-flow)/_components/ManagerSidebar'
import { Navbar } from '@/components/shared/navbar/Navbar'
import { Outlet } from 'react-router'

const ManagerLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
        <ManagerSidebar />
              <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        
        <div className="p-4 lg:p-6 ml-10 md:ml-0">
          <Navbar
            title={"Manager"}
            subtitle={"Run huddles. Assign roleplays. Approve logs" }
            notificationCount={2}
            user={{
              name: "Esther Howard",
              role: "Manager",
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

export default ManagerLayout


