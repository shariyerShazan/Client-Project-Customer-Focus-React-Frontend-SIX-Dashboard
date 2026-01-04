// _components/InvoiceDetailsDialog.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Download, Printer } from "lucide-react";
import type { Invoice } from "../InvoiceManagement";


interface Props {
  isOpen: boolean;
  onClose: () => void;
  invoice: Invoice | null;
}

export const InvoiceDetailsDialog = ({ isOpen, onClose, invoice }: Props) => {
  if (!invoice) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden border-none rounded-2xl">
        <div className="p-6 border-b relative bg-slate-50/50">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-slate-900">
              Invoice Details
            </DialogTitle>
          </DialogHeader>
          <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Invoice Number</p>
              <h2 className="text-lg font-bold text-slate-900">{invoice.invoiceNo}</h2>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Status</p>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-bold bg-green-50 text-green-600">
                {invoice.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 py-6 border-y border-slate-100">
            <div>
              <p className="text-sm text-slate-400 font-bold mb-1">Billing Date</p>
              <p className="text-base font-semibold text-slate-700">{invoice.date}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 font-bold mb-1">Plan</p>
              <p className="text-base font-semibold text-slate-700">{invoice.subscription}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 font-bold mb-1">Total Amount</p>
              <p className="text-base font-bold text-[#8C23CC] text-lg">{invoice.amount}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 font-bold mb-1">Payment Method</p>
              <p className="text-base font-semibold text-slate-700">Visa ending in **** 4242</p>
            </div>
          </div>

          <div className="flex justify-between gap-3 pt-4">
            <Button variant="outline" className="flex-1 gap-2 cursor-pointer">
              <Printer size={16} /> Print
            </Button>
            <Button className="flex-1 bg-[#8C23CC] hover:bg-[#761eb0] text-white gap-2 cursor-pointer font-bold">
              <Download size={16} /> Download PDF
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};