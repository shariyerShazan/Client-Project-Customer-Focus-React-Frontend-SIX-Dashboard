

import { useState, useMemo } from "react";
import { Search, Filter, Download, Users, Banknote, Landmark, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTable, { type Column } from "@/components/shared/common/CommonTable";
import CommonPagination from "@/components/shared/common/CommonPagination";
import { OrderListData, type Order } from "./_components/RevenueChartData";
import { RevenueAreaChart, SellingSourceDonut } from "./_components/DashboardCharts";
import StatCard from "./_components/StatCard"

const SuperAmdinRevenueDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Pagination Logic
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return OrderListData.slice(start, start + pageSize);
  }, [currentPage, pageSize]);

  const columns: Column<Order>[] = [
    {
      header: "Company Name",
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${item.avatarBg}`}>
            {item.initials}
          </div>
          <div>
            <div className="font-bold text-gray-900">{item.name}</div>
            <div className="text-xs text-gray-400">{item.domain}</div>
          </div>
        </div>
      ),
    },
    { header: "Email", key: "email" },
    { header: "Plan Type", render: (item) => <span className="font-bold">{item.plan}</span> },
    { header: "Amount", render: (item) => <span className="font-bold">{item.amount}</span> },
    {
      header: "Created At",
      render: (item) => (
        <div>
          <div className="text-sm font-medium">{item.date}</div>
          <div className="text-[10px] text-gray-400">5:20 PM</div>
        </div>
      ),
    },
  ];



  return (
    <div className="p-8 bg-[#FDFDFF] min-h-screen space-y-8">
      {/* Stats Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="$12,500" 
          trend="13.45%" 
          icon={Wallet} 
          color="#8C23CC" 
        />
        <StatCard 
          title="Monthly Revenue" 
          value="$12,500" 
          trend="13.45%" 
          icon={Banknote} 
          color="#8C23CC" 
        />
        <StatCard 
          title="Net Profit" 
          value="$12,500" 
          trend="13.45%" 
          icon={Landmark} 
          color="#8C23CC" 
        />
        <StatCard
          title="Total Tenants" 
          value="5,000" 
          trend="13.45%" 
          icon={Users} 
          color="#8C23CC" 
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 text-[#8C23CC]">
           <RevenueAreaChart />
        </div>
        <div className="lg:col-span-1">
           <SellingSourceDonut />
        </div>
      </div>

      {/* Order List Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-2xl font-bold mb-6">Order List</h2>
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, email, domain and plan"
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none focus:border-purple-500"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex gap-2 border-slate-200"><Filter size={16} /> Filter</Button>
            <Button variant="outline" className="flex gap-2 border-slate-200"><Download size={16} /> Export</Button>
          </div>
        </div>

        <CommonTable columns={columns} data={paginatedData} />

        <CommonPagination
          totalItems={OrderListData.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    </div>
  );
};

export default SuperAmdinRevenueDashboard;