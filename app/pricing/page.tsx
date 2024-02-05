import PricingCards from "@/components/PricingCards";
import React from "react";

function PricingPage() {
  return (
    <div className="flex w-full items-center justify-center py-6 px-3">
      <div>
        <PricingCards redirect={true} />
      </div>
    </div>
  );
}

export default PricingPage;
