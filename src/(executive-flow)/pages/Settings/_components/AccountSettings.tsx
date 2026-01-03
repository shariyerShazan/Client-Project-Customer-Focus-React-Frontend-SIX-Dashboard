import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";


const AccountSettings = () => {
  return (
    <div className="space-y-10 max-w-2xl">
      {/* Profile Info Header */}
      <section>
        <h2 className="text-xl font-bold text-slate-900">Profile Information</h2>
        <p className="text-base text-slate-500">Manage your personal details and keep your contact info up to date.</p>
      </section>

      {/* Profile Picture */}
      <section className="space-y-4">
        <Label className="text-base font-semibold text-slate-700">Profile Picture</Label>
        <div className="flex items-center gap-6">
          <div className="relative">
            <img 
              src="https://github.com/shadcn.png" 
              alt="Avatar" 
              className="w-24 h-24 rounded-full object-cover border-2 border-slate-100"
            />
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="text-[#B91010] border-[#B91010] hover:bg-red-50 px-6">
              Delete
            </Button>
            <Button className="bg-[#8C23CC] hover:bg-[#761eb0] text-white px-6">
              Update
            </Button>
          </div>
        </div>
      </section>

      {/* Form Fields */}
      <section className="grid gap-6">
        <div className="grid gap-2">
          <Label className="text-slate-700 font-medium">Name</Label>
          <Input placeholder="name" className="bg-slate-50/50 border-slate-200" />
        </div>
        <div className="grid gap-2">
          <Label className="text-slate-700 font-medium">Email</Label>
          <Input defaultValue="esther Howard (Super Admin)" className="bg-slate-50/50 border-slate-200" />
        </div>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <Label className="text-slate-700 font-medium">Email</Label>
            {/* <span className="text-base text-slate-400 font-medium">Max Wollg</span> */}
          </div>
          <Input placeholder="Enter secondary email" className="bg-slate-50/50 border-slate-200" />
        </div>
        <div className="grid gap-2">
          <Label className="text-slate-700 font-medium">Phone</Label>
          <Input defaultValue="+880178799977" className="bg-slate-50/50 border-slate-200" />
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Security Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Security</h2>
          <p className="text-lg text-slate-500">Keep your account secure with extra authentication and alerts</p>
        </div>

         <div  className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
            <div className="space-y-1">
              <Label className="text-lg font-bold text-slate-800">Two-Factor Authentication</Label>
              <p className="text-base text-slate-500">Add an extra layer of protection to your account.</p>
            </div>
            <Switch 
              className="data-[state=checked]:bg-[#8C23CC] scale-125 cursor-pointer" 
            />
          </div>

          <div  className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
            <div className="space-y-1">
              <Label className="text-lg font-bold text-slate-800">Login Alert Notification</Label>
              <p className="text-base text-slate-500">Get notified when your account is accessed from a new device</p>
            </div>
            <Switch 
              className="data-[state=checked]:bg-[#8C23CC] scale-125 cursor-pointer" 
            />
          </div>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-slate-900">Change Password</h3>
            <p className="text-base text-slate-500">Choose a secure password. <span className="text-slate-400">Last changed: September 16, 2025</span></p>
          </div>
          <Button variant="link" className="text-[#8C23CC] font-bold cursor-pointer">Change</Button>
        </div>
      </section>
    </div>
  );
};

export default AccountSettings;