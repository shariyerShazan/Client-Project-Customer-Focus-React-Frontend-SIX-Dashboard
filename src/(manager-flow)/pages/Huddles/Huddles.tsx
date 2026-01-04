



import { Plus, Search, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTable, {
  type Column,
} from "@/components/shared/common/CommonTable";
import { useState } from "react";
import CreateHuddleDialog from "./_components/CreateHuddleDialog";

interface HuddleData {
  id: string;
  name: string;
  meetingId: string;
  duration: string;
  date: string;
  time: string;
  status: "Complete" | "Pending" | "Cancelled";
  participants: number;
  participantAvatars: string[];
}

const ManagerHuddles = () => {
  const [search, setSearch] = useState("");
  const [isCreateHuddleOpen, setIsCreateHuddleOpen] = useState(false);


  const handleOpenAdd = () => {
  setIsCreateHuddleOpen(true);
};

const handleCloseAdd = () => {
  setIsCreateHuddleOpen(false);
};

  // Avatar Images Data
  const participantAvatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/44.jpg",
    "https://randomuser.me/api/portraits/men/68.jpg",
    "https://randomuser.me/api/portraits/men/75.jpg",
    "https://randomuser.me/api/portraits/men/91.jpg",
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://randomuser.me/api/portraits/men/25.jpg",
  ];


 

  // Today's Huddles Data 
  const todaysHuddlesData: HuddleData[] = [
    {
      id: "1",
      name: "Morning Meeting",
      meetingId: "123213",
      duration: "60min",
      date: "April 14, 2020",
      time: "5:20 PM",
      status: "Complete",
      participants: 8,
      participantAvatars: participantAvatars.slice(0, 4),
    },
    {
      id: "2",
      name: "Morning Meeting",
      meetingId: "123214",
      duration: "60min",
      date: "April 14, 2020",
      time: "5:20 PM",
      status: "Complete",
      participants: 8,
      participantAvatars: participantAvatars.slice(0, 4),
    },
    {
      id: "3",
      name: "Morning Meeting",
      meetingId: "123215",
      duration: "60min",
      date: "April 14, 2020",
      time: "5:20 PM",
      status: "Complete",
      participants: 8,
      participantAvatars: participantAvatars.slice(0, 4),
    },
    {
      id: "4",
      name: "Morning Meeting",
      meetingId: "123216",
      duration: "60min",
      date: "April 14, 2020",
      time: "5:20 PM",
      status: "Complete",
      participants: 8,
      participantAvatars: participantAvatars.slice(0, 4),
    },
  ];

  const columns: Column<HuddleData>[] = [
    {
      header: "Name",
      render: (item) => (
        <div>
          <div className="font-semibold text-slate-900">{item.name}</div>
          <div className="text-xs text-slate-500">
            Meeting ID: {item.meetingId}
          </div>
        </div>
      ),
    },
    {
      header: "Duration",
      render: (item) => <span className="text-slate-700">{item.duration}</span>,
    },
    {
      header: "Date & Time",
      render: (item) => (
        <div>
          <div className="text-slate-900">{item.date}</div>
          <div className="text-xs text-slate-500">{item.time}</div>
        </div>
      ),
    },
    {
      header: "Status",
      render: (item) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            item.status === "Complete"
              ? "bg-green-100 text-green-700"
              : item.status === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      header: "Participants",
      render: (item) => {
        // Show 4 avatars as per design, then show remaining count
        const visibleAvatars = item.participantAvatars.slice(0, 4);
        const remainingCount = item.participants - 4;
        

        return (
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {visibleAvatars.map((avatarUrl, index) => (
                <img
                  key={index}
                  src={avatarUrl}
                  alt={`Participant ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    (
                      e.target as HTMLImageElement
                    ).src = `https://ui-avatars.com/api/?name=User${
                      index + 1
                    }&background=6366f1&color=fff&size=128`;
                  }}
                />
              ))}
              {remainingCount > 0 && (
                <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-white flex items-center justify-center -ml-2">
                  <span className="text-xs text-white font-semibold">
                    {remainingCount}+
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      },
    },
    {
      header: "Action",
      render: () => (
        <Button
          size="sm"
          className="bg-[#8C23CC] hover:bg-[#761eb0] text-white w-10 h-10 p-0"
        >
          <Video className="w-4 h-4" />
        </Button>
      ),
    },
  ];

  return (
    <div className="mt-10 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-slate-900">Huddles</h1>
        <div className="flex gap-3">
          <Button
              onClick={handleOpenAdd}
              className="bg-[#8C23CC] hover:bg-[#761eb0] text-white px-6 font-bold"
            >
              <Plus size={18} className="mr-1" /> Add Huddle
            </Button>

          {/* <Button variant="outline" className="border-slate-200 cursor-pointer">Import CSV</Button> */}
        </div>
      </div>


      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">

        <div className="flex justify-between items-center mb-6">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, domain and plan" 
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-base outline-none focus:ring-1 focus:ring-[#8C23CC]" 
            />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="px-6 cursor-pointer">Filter</Button>
            <Button variant="outline" className="px-6 flex gap-2 cursor-pointer">Export CSV</Button>
          </div>
        </div>
        
        <CommonTable columns={columns} data={todaysHuddlesData} />
      </div>

      <CreateHuddleDialog
          open={isCreateHuddleOpen}
          onClose={handleCloseAdd}
        />

    </div>
  );
};

export default ManagerHuddles;