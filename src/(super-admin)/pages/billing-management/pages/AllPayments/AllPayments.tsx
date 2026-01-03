import { useState, useMemo } from "react";
import { Users, Banknote, Search, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTable, { type Column } from "@/components/shared/common/CommonTable";
import CommonPagination from "@/components/shared/common/CommonPagination";
import PaymentStatsCard from "./_components/PaymentStatsCard";
import { AllPaymentsData, type Payment } from "./_components/AllPaymentsData";

const SuperAmdinAllPayments = () => {
  // 1. Manage State for Data, Pagination, and Search
  const [data] = useState<Payment[]>(AllPaymentsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Filter data based on search input
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.planType.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]);

  // 3. Slice data for the current page (The "Working Pagination" logic)
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const columns: Column<Payment>[] = [
    {
      header: "Company Name",
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${item.avatarColor}`}>
            {item.name.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-gray-900 leading-tight">{item.name}</div>
            <div className="text-xs text-gray-400">{item.domain}</div>
          </div>
        </div>
      ),
    },
    { header: "Email", key: "email" },
    {
      header: "Plan Type",
      render: (item) => <span className="font-bold text-gray-800">{item.planType}</span>,
    },
    {
      header: "Amount",
      render: (item) => <span className="font-bold text-gray-900">{item.amount}</span>,
    },
    {
      header: "Status",
      render: (item) => (
        <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-md text-xs font-medium">
          {item.status}
        </span>
      ),
    },
    {
      header: "Created At",
      render: (item) => (
        <div>
          <div className="text-slate-900 text-sm">{item.createdAt}</div>
          <div className="text-[10px] text-gray-400 font-medium uppercase">5:20 PM</div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 min-h-screen space-y-8">
      <h1 className="text-2xl font-bold text-slate-900">All Payments</h1>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <PaymentStatsCard 
          icon={<Users size={20} />} 
          label="Total Clients" 
          value="25" 
        />
        <PaymentStatsCard 
          icon={<Banknote size={20} />} 
          label="Total Paid" 
          value="$12,500" 
        />
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to page 1 on search
              }}
              placeholder="Search by name, email and plan"
              className="w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm outline-none focus:border-purple-500 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Showing</span>
              <select className="border rounded-md px-2 py-1.5 bg-white outline-none cursor-pointer">
                <option>Last 6 months</option>
                <option>Last year</option>
              </select>
            </div>
            <Button variant="outline" className="flex gap-2 text-slate-600 border-slate-200">
              <Filter size={16} /> Filter
            </Button>
            <Button variant="outline" className="flex gap-2 text-slate-600 border-slate-200">
              <Download size={16} /> Export CSV
            </Button>
          </div>
        </div>

        {/* 4. Pass the PAGINATED data to the table */}
        <CommonTable columns={columns} data={paginatedData} />

        {/* 5. Connect Pagination Controls */}
        <CommonPagination
          totalItems={filteredData.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onPageSizeChange={(newSize) => {
            setPageSize(newSize);
            setCurrentPage(1); // Reset to page 1 when limit changes
          }}
        />
      </div>
    </div>
  );
};

export default SuperAmdinAllPayments;