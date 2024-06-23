import React from "react";

import { SubscriptionAutoForm } from "@/components/Subscription/SubcriptionForm";

import { PricingCard } from "../../page";

export const plan = {
  title: "Enterprise",
  price: "Custom",
  description: "Dedicated support and infrastructure to fit your needs",
  features: [
    "Example Feature Number 1",
    "Example Feature Number 2",
    "Example Feature Number 3",
    "Super Exclusive Feature",
  ],
  actionLabel: "Contact Sales",
  exclusive: true,
};

const page = ({ params }: { params: { slug: String } }) => {
  const { slug } = params;

  return (
    <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
      <div className="  shadow-lg">
        <PricingCard key={plan.title} {...plan} isYearly={false} />
      </div>
      <div className="max-w-sm  justify-self-start p-2">
        <SubscriptionAutoForm />
      </div>
    </div>
  );
};

export default page;
