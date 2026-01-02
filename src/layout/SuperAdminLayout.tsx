import { SuperAdminSidebar } from '@/(super-admin)/_components/SuperAdminSidebar';
import { Navbar } from '@/components/shared/navbar/Navbar'; 
import { Outlet } from 'react-router';

const SuperAdminLayout = () => {


  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <SuperAdminSidebar />

      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        
        <div className="p-4 ">
            <div className='ml-10 md:ml-0'>
                <Navbar 
            title={"Super Admin Workspace"}
            subtitle={"Manage organizations, trainers, users, and system-wide operations." }
            notificationCount={2}
            user={{
              name: "Esther Howard",
              role: "Super Admin",
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
  );
};

export default SuperAdminLayout;