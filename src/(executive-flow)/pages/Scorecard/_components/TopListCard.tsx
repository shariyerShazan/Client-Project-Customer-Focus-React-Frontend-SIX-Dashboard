interface ListEntry {
  name: string;
  email: string;
  value: string;
  badge?: string;
}

export const TopListCard = ({ title, items }: { title: string, items: ListEntry[] }) => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
    <div className="bg-white rounded-xl border border-slate-100 p-4 space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-[#8C23CC] flex items-center justify-center font-bold text-base">A</div>
            <div>
              <p className="font-bold text-base text-slate-900 leading-tight">{item.name}</p>
              <p className="text-[14px] text-slate-400">{item.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            
            {item.badge ? (
              <span className="px-2 py-1 bg-[#10B956]/10 text-[#10B956] text-base text-bold rounded">
                {item.badge}
              </span>
            ): <span className="text-base font-bold text-slate-700">{item.value}</span>}
          </div>
        </div>
      ))}
    </div>
  </div>
);