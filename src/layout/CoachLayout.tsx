import { CoachSidebar } from '@/(coach-flow)/_components/CoachSidebar'
import { Navbar } from '@/components/shared/navbar/Navbar'
import { Outlet } from 'react-router'

const CoachLayout = () => {
  return (
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden">
      <CoachSidebar />

      <main className="flex-1 lg:ml-72 flex flex-col h-screen overflow-hidden">
        <div className="fixed top-0 left-0 right-0 lg:left-72 z-40 bg-[#F8F9FA] px-4 pt-4">
          <div className="ml-10 md:ml-0">
            <Navbar
              title="Trainer Workspace"
              subtitle="You can manage sessions, materials and score roleplays here."
              notificationCount={2}
              user={{
                name: "Esther Howard",
                role: "Trainer",
                profilePic: "https://i.pravatar.cc/150?u=esther"
              }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pt-28 px-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default CoachLayout
