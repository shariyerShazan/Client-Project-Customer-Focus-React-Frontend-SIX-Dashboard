import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { X } from "lucide-react";
import Swal from "sweetalert2";
import type { Branch } from "../BranchesManagement";

// Define the shape of the form data (everything except ID and metadata)
type BranchFormData = Omit<Branch, "id" | "status" | "createdAt">;

interface BranchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: BranchFormData) => void;
  initialData?: Branch | null;
}

export const BranchDialog = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}: BranchDialogProps) => {
  const [formData, setFormData] = useState<BranchFormData>({
    name: "",
    subdomain: "",
    email: "",
    manager: "",
    region: "africa",
    staffCount: 100,
  });

  useEffect(() => {
    if (initialData) {
    //   setFormData({
    //     name: initialData.name,
    //     subdomain: initialData.subdomain,
    //     email: initialData.email,
    //     manager: initialData.manager,
    //     region: initialData.region.toLowerCase(),
    //     staffCount: initialData.staffCount,
    //   });
    } else {
    //   setFormData({
    //     name: "",
    //     subdomain: "",
    //     email: "",
    //     manager: "",
    //     region: "africa",
    //     staffCount: 100,
    //   });
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();

    Swal.fire({
      title: initialData ? "Success!" : "Branch Added!",
      text: `Branch has been ${initialData ? "updated" : "created"} successfully.`,
      icon: "success",
      confirmButtonColor: "#8C23CC",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none rounded-2xl">
        <div className="p-6 border-b relative">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-900">
              {initialData ? "Edit Branch" : "Add Branch"}
            </DialogTitle>
            <p className="text-sm text-slate-500">Fill up all the form</p>
          </DialogHeader>
          {/* <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
          >
            <X size={20} />
          </button> */}
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <InputField
            label="Company Name"
            value={formData.name}
            onChange={(v) => setFormData({ ...formData, name: v })}
            placeholder="Company Name"
          />
          <InputField
            label="Subdomain"
            value={formData.subdomain}
            onChange={(v) => setFormData({ ...formData, subdomain: v })}
            placeholder="e2e.com"
          />
          <InputField
            label="Company Email"
            type="email"
            value={formData.email}
            onChange={(v) => setFormData({ ...formData, email: v })}
            placeholder="@domain.com"
          />
          <InputField
            label="Manager"
            value={formData.manager}
            onChange={(v) => setFormData({ ...formData, manager: v })}
            placeholder="Abdullah"
          />

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">
              Select Region <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.region}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
              className="w-full h-11 px-3 bg-white border border-slate-200 rounded-md text-sm outline-none focus:ring-1 focus:ring-[#8C23CC]"
            >
              <option value="africa">africa</option>
              <option value="asia">asia</option>
              <option value="europe">europe</option>
            </select>
          </div>

          <InputField
            label="Staff"
            type="number"
            value={String(formData.staffCount)}
            onChange={(v) => setFormData({ ...formData, staffCount: Number(v) })}
            placeholder="100"
          />

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="h-11 px-8 border-slate-200"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="h-11 px-8 bg-[#8C23CC] hover:bg-[#761eb0] text-white"
            >
              {initialData ? "Update Branch" : "Add Branch"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// --- Reusable Input Component with strict types ---
interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: InputFieldProps) => (
  <div className="space-y-1">
    <label className="text-sm font-medium text-slate-700">
      {label} <span className="text-red-500">*</span>
    </label>
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="h-11 border-slate-200 focus-visible:ring-[#8C23CC]"
      required
    />
  </div>
);