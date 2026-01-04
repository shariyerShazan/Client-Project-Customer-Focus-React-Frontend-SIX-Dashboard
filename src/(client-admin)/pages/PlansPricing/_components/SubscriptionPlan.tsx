import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface SubscriptionCardProps {
  plan: string;
  price: string;
  description: string;
  features: string[];
  badgeColor: string;
  isCurrentPlan?: boolean;
}

const SubscriptionPlan = ({
  plan,
  price,
  description,
  features,
  badgeColor,
  isCurrentPlan = false,
}: SubscriptionCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm">
      <div className={`w-fit px-3 py-1 rounded-md text-xs font-medium mb-4 ${badgeColor}`}>
        {plan}
      </div>

      <p className="text-sm text-slate-500 mb-6">{description}</p>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-slate-400 text-sm">/month</span>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-50" />
            <span className="text-sm text-slate-700">{feature}</span>
          </div>
        ))}
      </div>

      {isCurrentPlan ? (
        <Button
          disabled
          className="w-full bg-slate-200 text-slate-500 cursor-not-allowed py-6 font-semibold "
        >
          Current Plan
        </Button>
      ) : (
        <Button
          className="w-full bg-[#8C23CC] hover:bg-[#761eb0] text-white py-6 font-semibold cursor-pointer"
        >
          Select Plan
        </Button>
      )}
    </div>
  );
};

export default SubscriptionPlan;
