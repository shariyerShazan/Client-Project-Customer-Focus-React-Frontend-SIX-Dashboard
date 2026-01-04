// _components/UserDialog.tsx
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import type { User, UserFormData } from "../UsersManagement";


interface UserDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: UserFormData) => void;
  initialData?: User | null;
}

export const UserDialog = ({ isOpen, onClose, onSave, initialData }: UserDialogProps) => {
  const [formData, setFormData] = useState<UserFormData>({
    name: "", email: "", mobile: "", role: "Staff", branch: "Softvence Delta"
  });

//   useEffect(() => {
//     if (isOpen) {
//       setFormData(initialData ? {
//         name: initialData.name,
//         email: initialData.email,
//         mobile: initialData.mobile,
//         role: initialData.role,
//         branch: initialData.branch
//       } : { name: "", email: "", mobile: "", role: "Staff", branch: "Softvence Delta" });
//     }
//   }, [initialData, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none rounded-2xl">
        <div className="p-6 border-b relative">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-900">
              {initialData ? "Edit User" : "Add User"}
            </DialogTitle>
            <p className="text-sm text-slate-500">Enter user details below</p>
          </DialogHeader>
          <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 cursor-pointer"><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Name *</label>
            <Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Full Name" required className="h-11 border-slate-200" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Email *</label>
            <Input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="email@domain.com" required className="h-11 border-slate-200" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Mobile Number *</label>
            <Input value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} placeholder="+1 234..." required className="h-11 border-slate-200" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Role *</label>
            <select 
              value={formData.role} 
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              className="w-full h-11 px-3 bg-white border border-slate-200 rounded-md text-sm outline-none focus:ring-1 focus:ring-[#8C23CC]"
            >
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Staff">Staff</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Select Branch *</label>
            <select 
              value={formData.branch} 
              onChange={(e) => setFormData({...formData, branch: e.target.value})}
              className="w-full h-11 px-3 bg-white border border-slate-200 rounded-md text-sm outline-none focus:ring-1 focus:ring-[#8C23CC]"
            >
              <option value="Softvence Delta">Softvence Delta</option>
              <option value="SparkTech Agency">SparkTech Agency</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="h-11 px-8 cursor-pointer">Cancel</Button>
            <Button type="submit" className="h-11 px-8 bg-[#8C23CC] hover:bg-[#761eb0] text-white cursor-pointer font-bold">
              {initialData ? "Update User" : "Add User"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};