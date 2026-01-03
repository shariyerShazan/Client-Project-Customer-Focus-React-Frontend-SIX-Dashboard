import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const NotificationSettings = () => {
  const notifications = [
    { title: "Enable Desktop Notifications", desc: "Receive notification on all of updates", checked: true },
    { title: "Receive Email Notifications", desc: "Important updates and alerts via email", checked: true },
    { title: "Receive SMS Notifications", desc: "Updates and alerts directly to your phone via SMS", checked: true },
    { title: "Daily Summaries", desc: "Get a daily overview of all project activities and updates", checked: true },
  ];

  return (
    <div className="space-y-8 max-w-2xl">
      <section>
        <h2 className="text-xl font-bold text-slate-900">Notifications</h2>
        <p className="text-sm text-slate-500">Manage your personal details and keep your contact info up to date.</p>
      </section>

      <div className="space-y-6">
        {notifications.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
            <div className="space-y-1">
              <Label className="text-lg font-bold text-slate-800">{item.title}</Label>
              <p className="text-base text-slate-500">{item.desc}</p>
            </div>
            <Switch 
              defaultChecked={item.checked} 
              className="data-[state=checked]:bg-[#8C23CC] scale-125 cursor-pointer" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;