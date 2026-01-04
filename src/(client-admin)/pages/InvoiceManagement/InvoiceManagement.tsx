// ClientAdminInvoiceManagement.tsx
import { useState, useMemo } from "react";
import { Search, MoreVertical, Eye, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTable, { type Column } from "@/components/shared/common/CommonTable";
import CommonPagination from "@/components/shared/common/CommonPagination";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { InvoiceDetailsDialog } from "./_components/InvoiceDetailsDialog";


export type Invoice = {
  id: string;
  invoiceNo: string;
  date: string;
  subscription: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
};

const ClientAdminInvoiceManagement = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  // Mock Data
  const [invoices] = useState<Invoice[]>([
    { id: "1", invoiceNo: "INV-2024-012", date: "Dec 15, 2024", subscription: "Growth Plan", amount: "$558.00", status: "Paid" },
    { id: "2", invoiceNo: "INV-2024-011", date: "Nov 15, 2024", subscription: "Growth Plan", amount: "$558.00", status: "Paid" },
    { id: "3", invoiceNo: "INV-2024-010", date: "Oct 15, 2024", subscription: "Basic Plan", amount: "$299.00", status: "Paid" },
    { id: "4", invoiceNo: "INV-2024-009", date: "Sept 15, 2024", subscription: "Basic Plan", amount: "$299.00", status: "Paid" },
  ]);

  const handleViewDetails = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setIsDetailsOpen(true);
  };

  const filteredData = useMemo(() => {
    return invoices.filter(inv => 
      inv.invoiceNo.toLowerCase().includes(search.toLowerCase()) ||
      inv.subscription.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, invoices]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const columns: Column<Invoice>[] = [
    {
      header: "Invoice",
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
            <FileText size={20} />
          </div>
          <span className="font-bold text-slate-900">{item.invoiceNo}</span>
        </div>
      )
    },
    { header: "Date", key: "date" },
    { 
      header: "Subscription", 
      render: (item) => <span className="font-medium text-slate-700">{item.subscription}</span> 
    },
    { 
      header: "Amount", 
      render: (item) => <span className="font-bold text-slate-900">{item.amount}</span> 
    },
    {
      header: "Status",
      render: (item) => (
        <span className={`px-3 py-1 rounded-md text-sm font-bold ${
          item.status === 'Paid' ? 'bg-[#D0FBE2] text-[#10B956]' : 'bg-amber-50 text-amber-600'
        }`}>
          {item.status}
        </span>
      )
    },
    {
      header: "Action",
      render: (item) => (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
              <MoreVertical size={18} className="text-slate-400" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-1" align="end">
            <button 
              onClick={() => handleViewDetails(item)}
              className="w-full flex items-center gap-2 px-3 py-2 text-base hover:bg-slate-50 text-slate-700 rounded-md cursor-pointer transition-colors"
            >
              <Eye size={16} className="text-blue-500" /> View Details
            </button>
            <button 
              className="w-full flex items-center gap-2 px-3 py-2 text-base hover:bg-slate-50 text-slate-700 rounded-md cursor-pointer transition-colors"
            >
              <Download size={16} className="text-green-500" /> Download Invoice
            </button>
          </PopoverContent>
        </Popover>
      )
    }
  ];

  return (
    <div className="p-8 min-h-screen space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Billing & Invoices</h1>
          <p className="text-slate-500 text-base">Download and view your previous transactions.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by invoice number..." 
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-base outline-none focus:ring-1 focus:ring-[#8C23CC]" 
            />
          </div>
        </div>

        <CommonTable columns={columns} data={paginatedData} />
        
        <div className="mt-6">
            <CommonPagination 
              totalItems={filteredData.length} 
              pageSize={pageSize} 
              currentPage={currentPage} 
              onPageChange={setCurrentPage} 
              onPageSizeChange={setPageSize}
            />
        </div>
      </div>

      <InvoiceDetailsDialog
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
        invoice={selectedInvoice} 
      />
    </div>
  );
};

export default ClientAdminInvoiceManagement;