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

const EMPTY_FORM: Partial<Tenant> = {
  name: "",
  domain: "",
  email: "",
  planType: "Starter",
};

const SuperAdminTenantDialog = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: SuperAdminTenantDialogProps) => {
  const [formData, setFormData] = useState<Partial<Tenant>>(EMPTY_FORM);


  useEffect(() => {
    if (initialData) {
    //   setFormData(initialData);
    } else {
    //   setFormData(EMPTY_FORM);
    }
  }, [initialData]); // ❗ removed isOpen

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
          {/* Company Name */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Company Name <span className="text-red-500">*</span>
            </Label>
            <Input
              value={formData.name ?? ""}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          {/* Subdomain */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Subdomain <span className="text-red-500">*</span>
            </Label>
            <Input
              value={formData.domain ?? ""}
              onChange={(e) =>
                setFormData({ ...formData, domain: e.target.value })
              }
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Admin Email <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              value={formData.email ?? ""}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Plan */}
          <div className="space-y-4">
            <Label className="text-sm font-bold">Billing Plan</Label>
            <RadioGroup
              value={formData.planType}
              onValueChange={(val) =>
                setFormData({
                  ...formData,
                  planType: val as Tenant["planType"],
                })
              }
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Starter" id="starter" className="border-[#8C23CC] text-[#8C23CC]"/>
                <Label htmlFor="starter">Starter ($99/mo)</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Growth" id="growth" className="border-[#8C23CC] text-[#8C23CC]"/>
                <Label htmlFor="growth">Growth ($299/mo)</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Enterprise" id="enterprise" className="border-[#8C23CC] text-[#8C23CC]"/>
                <Label htmlFor="enterprise">Enterprise</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-[#8C23CC]">
              {initialData ? "Update Tenant" : "Create Tenant"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SuperAdminTenantDialog;
