import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { Tenant } from "./RecentTenantsData";

interface SuperAdminTenantDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Tenant>) => void;
  initialData?: Tenant | null;
}

const SuperAdminTenantDialog = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: SuperAdminTenantDialogProps) => {
  const [formData, setFormData] = useState<Partial<Tenant>>({
    name: "",
    domain: "",
    email: "",
    planType: "Starter",
  });

  // Sync state when editing starts or when dialog opens for "Add"
useEffect(() => {
  if (initialData) {
    setFormData(initialData);
  } else {
    setFormData({ name: "", domain: "", email: "", planType: "Starter" });
  }
}, [initialData, isOpen]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {initialData ? "Edit Tenant" : "Create New Tenant"}
          </DialogTitle>
          <DialogDescription className="text-slate-500">
            Fill up all the form
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Company Name <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="Company Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Subdomain <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="e2e.com"
              value={formData.domain}
              onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Admin Email <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              placeholder="@domain.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-4">
            <Label className="text-sm font-medium font-bold">Billing Plan</Label>
            <RadioGroup
              value={formData.planType}
              onValueChange={(val: any) => setFormData({ ...formData, planType: val })}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Starter" id="starter" className="border-purple-600 text-purple-600" />
                <Label htmlFor="starter">Starter ($99/mo)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Growth" id="growth" className="border-purple-600 text-purple-600" />
                <Label htmlFor="growth">Growth ($299/mo)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Enterprise" id="enterprise" className="border-purple-600 text-purple-600" />
                <Label htmlFor="enterprise">Enterprise</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="px-8 border-slate-300">
              Cancel
            </Button>
            <Button type="submit" className="bg-[#8A2BE2] hover:bg-[#7A26C1] px-8">
              {initialData ? "Update Tenant" : "Create Tenant"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SuperAdminTenantDialog;