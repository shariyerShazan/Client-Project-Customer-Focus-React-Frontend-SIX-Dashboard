import { CheckCircle2, AlertTriangle } from "lucide-react";

interface SummaryCardProps {
  label: string;
  value: string;
  trend: string;
  isUp: boolean;
  status: 'success' | 'warning';
}

const SummaryCard = ({ label, value, trend, isUp, status }: SummaryCardProps) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <span className="text-slate-800 font-bold text-sm">{label}</span>
      
    </div>
    <div className="mt-4 flex justify-between items-center">
      <div className="flex gap-2">
              <div className={`flex items-center  gap-1 ${isUp ? 'text-purple-600' : 'text-purple-600'}`}>
                 <span className="text-3xl font-bold">{isUp ? '↑' : '↓'} {trend}</span>
             </div>
            <span className="text-3xl font-extrabold text-[#8C23CC]">{value}</span>
      </div>
      {status === 'success' ? (
        <CheckCircle2 className="text-emerald-500 w-5 h-5" />
      ) : (
        <AlertTriangle className="text-amber-500 w-5 h-5" />
      )}
    </div>
  </div>
);

export const DashboardSummary = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <SummaryCard label="Complaints" value="25%" trend=" " isUp={false} status="success" />
    <SummaryCard label="CSAT" value="1.8 pts" trend=" " isUp={true} status="warning" />
    <SummaryCard label="Repeat" value="15%" trend=" " isUp={true} status="success" />
    <SummaryCard label="Adoptions" value="85%" trend=" " isUp={true} status="success" />
  </div>
);