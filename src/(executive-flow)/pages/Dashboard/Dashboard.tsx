import { useState, useMemo } from "react";
import { Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTable, { type Column } from "@/components/shared/common/CommonTable";
import { PerformanceData, type BranchPerformance } from "./_components/ExecutiveData";
import { DashboardSummary } from "./_components/DashboardSummary";
import { DashboardTrends } from "./_components/DashboardTrends";


const ExecutiveDashboard = () => {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return PerformanceData.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.domain.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const columns: Column<BranchPerformance>[] = [
    {
      header: "Company Name",
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 text-[#8C23CC] flex items-center justify-center font-bold text-sm">
            {item.initial}
          </div>
          <div>
            <div className="font-bold text-slate-900 leading-tight">{item.name}</div>
            <div className="text-xs text-slate-400">{item.domain}</div>
          </div>
        </div>
      ),
    },
    {
      header: "Status",
      render: (item) => (
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${
            item.status === 'excellent' ? 'bg-emerald-500' : 
            item.status === 'warning' ? 'bg-amber-500' : 'bg-red-500'
          }`} />
          <span className="font-bold text-slate-700">{item.score}</span>
        </div>
      ),
    },
    {
      header: "Created At",
      render: (item) => (
        <div className="text-sm">
          <div className="font-bold text-slate-900">{item.date}</div>
          <div className="text-xs text-slate-400">5:20 PM</div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 min-h-screen space-y-8">
      <DashboardSummary />
      <DashboardTrends />

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">Branch Performance</h3>
          <div className="flex items-center gap-4">
             <div className="relative w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name or domain"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none focus:border-[#8C23CC]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
             </div>
             <Button className="bg-[#8C23CC] hover:bg-[#761eb0] text-white cursor-pointer px-6">View Branches</Button>
             <Button variant="outline" className="cursor-pointer flex gap-2 border-slate-200">
               Export Reports <Download size={16} />
             </Button>
          </div>
        </div>

        <CommonTable columns={columns} data={filteredData} />
      </div>
    </div>
  );
};

export default ExecutiveDashboard;