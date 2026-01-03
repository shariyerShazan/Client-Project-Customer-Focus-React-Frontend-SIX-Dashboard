import  { useState } from "react";
import { Button } from "@/components/ui/button";
import SuperAdminSubscriptionCard from "./_components/SuperAdminSubscriptionCard";


const SuperAdminManageSubscriptions = () => {
  const [billingCycle, setBillingCycle] = useState<"Monthly" | "Yearly">("Monthly");

  const plans = [
    {
      plan: "Starter",
      price: "99",
      description: "Perfect for small teams getting started",
      badgeColor: "bg-slate-100 text-slate-600",
      features: Array(5).fill("Up to 10 users"),
    },
    {
      plan: "Growth",
      price: "99",
      description: "For growing organizations with advanced needs",
      badgeColor: "bg-[#D0DBFB] text-[#1447E6]",
      features: Array(5).fill("Up to 10 users"),
    },
    {
      plan: "Enterprise",
      price: "99",
      description: "For large organizations with custom requirements",
      badgeColor: "bg-orange-100 text-orange-600",
      features: Array(5).fill("Up to 10 users"),
    },
  ];

  return (
    <div className="p-8  min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Subscription</h1>
        <Button className="bg-[#8A2BE2] hover:bg-[#7A26C1]">
          + Create New Plan
        </Button>
      </div>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-12">
        <div className="bg-slate-100  rounded-lg flex">
          <button
            onClick={() => setBillingCycle("Monthly")}
            className={`px-6 py-2 rounded-md text-sm transition-all cursor-pointer ${
              billingCycle === "Monthly" ? "bg-white shadow-sm font-semibold" : "text-slate-800"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("Yearly")}
            className={`px-6 py-2 rounded-md text-sm transition-all cursor-pointer ${
              billingCycle === "Yearly" ? "bg-white shadow-sm font-semibold" : "text-slate-800"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto">
        {plans.map((item, index) => (
          <SuperAdminSubscriptionCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SuperAdminManageSubscriptions;