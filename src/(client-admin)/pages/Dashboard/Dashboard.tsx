import { useState, useMemo } from "react";
import { Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTable, { type Column } from "@/components/shared/common/CommonTable";
import CommonPagination from "@/components/shared/common/CommonPagination";
import { DashboardStat } from "./_components/DashboardStat";
import { TrendsSection } from "./_components/TrendsSection";
import { PerformanceData, type BranchPerformance } from "@/(executive-flow)/pages/Dashboard/_components/ExecutiveData";

const ClientAdminDashboard = () => {
  // 1. State Management
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // 2. Functional Search Logic
  const filteredData = useMemo(() => {
    return PerformanceData.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.domain.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // 3. Pagination Logic
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  // 4. Table Columns Configuration
  const columns: Column<BranchPerformance>[] = [
    {
      header: "Company Name",
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 text-[#8C23CC] flex items-center justify-center font-bold text-base">
            {item.initial}
          </div>
          <div>
            <div className="font-bold text-slate-900 leading-tight">{item.name}</div>
            <div className="text-sm text-slate-400">{item.domain}</div>
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
          <span className="font-bold text-slate-700 text-base">{item.score}</span>
        </div>
      ),
    },
    {
      header: "Created At",
      render: (item) => (
        <div className="text-sm">
          <div className="font-bold text-slate-900">{item.date}</div>
          <div className="text-sm text-slate-400">5:20 PM</div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8  min-h-screen space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-slate-900">Organization Overview</h1>
        <Button className="bg-[#8C23CC] hover:bg-[#761eb0] text-white px-6 cursor-pointer">
          Add New Branch
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardStat label="Complaints" value="25%" isUp={false} status="success" />
        <DashboardStat label="CSAT" value="1.8 pts" isUp={true} status="warning" />
        <DashboardStat label="Adoptions" value="85%" isUp={true} status="success" />
        <DashboardStat label="Repeat" value="15%" isUp={true} status="success" />
      </div>
      
      {/* Trends Graph */}
      <TrendsSection />

      {/* Branch Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900">Branch Variance</h3>
          
          <div className="flex items-center gap-4">
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name or domain"
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none focus:border-[#8C23CC] transition-all"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1); // Reset to page 1 on search
                }}
              />
            </div>
            <Button className="bg-[#8C23CC] hover:bg-[#761eb0] text-white px-6 cursor-pointer">
                View Branches
            </Button>
            <Button variant="outline" className="flex gap-2 border-slate-200 cursor-pointer">
              Export Reports <Download size={16} />
            </Button>
          </div>
        </div>

        {/* The Table */}
        <CommonTable columns={columns} data={paginatedData} />

        {/* Pagination Integration */}
        <div className="mt-6">
            <CommonPagination 
                totalItems={filteredData.length} 
                pageSize={pageSize} 
                currentPage={currentPage} 
                onPageChange={setCurrentPage} 
                onPageSizeChange={(size) => {
                    setPageSize(size);
                    setCurrentPage(1);
                }}
            />
        </div>
      </div>
    </div>
  );
};

export default ClientAdminDashboard;