import { Search, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTable, { type Column } from "@/components/shared/common/CommonTable";
import { ScorecardMetric } from "./_components/ScorecardMetric";
import { TopListCard } from "./_components/TopListCard";

type BranchT = {
  branch : string ;
  email : string ;
  createdAt: string ;
  trend: "up" | "down" | "neutral",
  adherence: string ;
  status: string ;
  region: string
  manager: string
  csat: string
  complaints: string
}

const ExecutiveScorecard = () => {
  const tableData = [
    { branch: 'Softvence Delta', email: 'softvence@e2e.com', region: 'Africa', manager: 'Gracce Manash', csat: '1.8 pts', complaints: '30%', adherence: '90%', trend: 'up', status: 50 },
    { branch: 'Softvence Delta', email: 'softvence@e2e.com', region: 'Africa', manager: 'Gracce Manash', csat: '1.8 pts', complaints: '30%', adherence: '85%', trend: 'up', status: 50 },
    { branch: 'Softvence Delta', email: 'softvence@e2e.com', region: 'Africa', manager: 'Gracce Manash', csat: '1.8 pts', complaints: '30%', adherence: '60%', trend: 'down', status: 50 },
    { branch: 'Softvence Delta', email: 'softvence@e2e.com', region: 'Africa', manager: 'Gracce Manash', csat: '1.8 pts', complaints: '30%', adherence: '90%', trend: 'neutral', status: 50 },
  ];

  const columns: Column<BranchT>[] = [
    {
      header: "Branch",
      render: (item) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-purple-50 text-[#8C23CC] flex items-center justify-center font-bold text-base">A</div>
          <div>
            <div className="font-bold text-slate-900 text-base">{item.branch}</div>
            <div className="text-sm text-slate-400">{item.email}</div>
          </div>
        </div>
      )
    },
    { header: "Region", key: "region" },
    { header: "Manager", key: "manager" },
    { header: "CSAT Score", key: "csat" },
    { header: "Complaints", key: "complaints" },
    {
      header: "Adherence",
      render: (item) => {
        const val = parseInt(item.adherence);
        const color = val >= 90 ? '#10B956' : val >= 80 ? '#B89200' : '#B91010';
        return <span className="px-3 py-1 rounded font-bold text-base" style={{ backgroundColor: `${color}15`, color }}>{item.adherence}</span>
      }
    },
    {
      header: "Trend",
      render: (item) => (
        item.trend === 'up' ? <TrendingUp size={16} className="text-[#10B956]" /> :
        item.trend === 'down' ? <TrendingDown size={16} className="text-[#B91010]" /> :
        <Minus size={16} className="text-[#B89200]" />
      )
    },
    {
      header: "Status",
      render: (item) => (
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${item.trend === 'down' ? 'bg-[#B91010]' : item.trend === 'neutral' ? 'bg-[#B89200]' : 'bg-[#10B956]'}`} />
          <span className="font-bold text-base text-slate-700">{item.status}</span>
        </div>
      )
    }
  ];

  return (
    <div className="p-8 min-h-screen space-y-12">
      {/* Header with PDF Download */}
      <div className="flex justify-end">
        <Button className="bg-[#8C23CC] hover:bg-[#761eb0] text-white cursor-pointer px-6">Download PDF</Button>
      </div>

      {/* 1. Top Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ScorecardMetric label="Complaints" value="25%" trend="25%" isUp={false} status="success" />
        <ScorecardMetric label="CSAT" value="1.8 pts" trend="1.8 pts" isUp={true} status="warning" />
        <ScorecardMetric label="Adoptions" value="85%" trend="85%" isUp={true} status="success" />
        <ScorecardMetric label="Time to Resolve" value="35%" trend="35%" isUp={false} status="success" />
      </div>

      {/* 2. Branch Performance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <h3 className="text-2xl font-bold mb-8">Branch Performance</h3>
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input placeholder="Search by name or domain" className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none focus:border-[#8C23CC]" />
          </div>
          <Button variant="outline" className="cursor-pointer flex gap-2 border-slate-200">Export Reports</Button>
        </div>
        <CommonTable columns={columns} data={tableData} />
      </div>

      {/* 3. Top Lists Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <TopListCard title="Highest CSAT Scores" items={Array(4).fill({ name: 'Softvence Delta', email: 'softvence@e2e.com', value: '1.8 pts' })} />
        <TopListCard title="Fewest Complaints" items={Array(4).fill({ name: 'Softvence Delta', email: 'softvence@e2e.com', value: '30%' })} />
        <TopListCard title="Best Adherence" items={Array(4).fill({ name: 'Softvence Delta', email: 'softvence@e2e.com', value: '90%', badge: '90%' })} />
      </div>
    </div>
  );
};

export default ExecutiveScorecard;