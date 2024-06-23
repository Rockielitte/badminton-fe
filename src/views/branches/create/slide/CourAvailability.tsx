import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { z } from "zod";

import AutoForm from "@/components/ui/auto-form";
import { Button } from "@/components/ui/button";

type Props = {};
export const amountFormSchema = z.object({
  amount: z.coerce
    .number()
    .positive("Amount is required")
    .max(4)
    .describe("Amount of court"),
});
const CourAvailability = (props: Props) => {
  return (
    <div className="flex size-full flex-col gap-4">
      <h1 className="text-center text-2xl font-bold uppercase">
        Court Availability
      </h1>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-3xl text-destructive">*</span>
        You must create 1 court at least and can create up to 4 court in your
        current subcriptions.
        <Button variant="outline" className="flex items-center gap-2">
          <ShoppingBagIcon /> Extend your subscriptions
        </Button>
      </div>
      <div className="flex items-center border-t p-2">
        <AutoForm
          formSchema={amountFormSchema}
          fieldConfig={{
            amount: {
              inputProps: {
                type: "number",
                placeholder: "Amount of court",
              },
              description: "Amount of court you want to create in advance",
            },
          }}
        >
          {/* <AutoFormSubmit>
            <Button className="flex items-center gap-2">Create</Button>
          </AutoFormSubmit> */}
        </AutoForm>
      </div>
    </div>
  );
};

export default CourAvailability;
