import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { RevenueChartData, SellingSourceData } from './RevenueChartData';


export const RevenueAreaChart = () => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-[400px]">
    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-slate-500 text-sm">Total Revenue</h3>
        <p className="text-3xl font-bold">$12,500</p>
        <span className="text-xs text-emerald-500">↑ +12% <span className="text-slate-400">Last 30 Days</span></span>
      </div>
      <select className="border rounded-md px-2 py-1 text-sm bg-slate-50 outline-none">
        <option>Monthly</option>
      </select>
    </div>
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart data={RevenueChartData}>
        <defs>
          <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8C23CC" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="#8C23CC" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
        <Tooltip cursor={{ stroke: '#8C23CC', strokeWidth: 1 }} />
        <Area type="monotone" dataKey="revenue" stroke="#8C23CC" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export const SellingSourceDonut = () => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-[400px]">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold">Total Selling Source</h3>
      <select className="border rounded-md px-2 py-1 text-sm bg-slate-50 outline-none">
        <option>Monthly</option>
      </select>
    </div>
    <div className="relative h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={SellingSourceData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
            {SellingSourceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <p className="text-2xl font-bold">$12,500</p>
        <p className="text-xs text-slate-400">Total Sale</p>
      </div>
    </div>
    <div className="flex justify-center gap-4 mt-4">
      {SellingSourceData.map((item) => (
        <div key={item.name} className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
          <span className="text-xs font-medium text-slate-600">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);