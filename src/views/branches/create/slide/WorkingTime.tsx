import React from "react";
import { z } from "zod";

import AutoForm from "@/components/ui/auto-form";

import { PeriodTimeFieldType } from "./PeriodTimeField";

type Props = {};
export const workingTimeFormSchema = z.object({
  availableTime: z.string({
    // Add a validation message for the field
    message: "Available time is required",
  }),

  SlotPeriod: z.coerce
    .number()
    .positive()
    .optional()
    .describe("Slot period in minutes")
    .default(30),
});

const WorkingTime = (props: Props) => {
  return (
    <div className="flex size-full flex-col gap-2 overflow-auto">
      <h1 className="text-center text-2xl font-bold uppercase">Working Time</h1>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-3xl text-destructive">*</span>
        You must provide us with the general information about your branch
        {/* <Button variant="outline" className="flex items-center gap-2">
      <ShoppingBagIcon /> Extend your subscriptions
    </Button> */}
      </div>
      <div className="flex  items-center border-t p-2">
        <AutoForm
          formSchema={workingTimeFormSchema}
          fieldConfig={{
            availableTime: {
              fieldType: PeriodTimeFieldType,
              // fieldType: TimePickerDemo,
            },
            SlotPeriod: {
              inputProps: {
                placeholder: "Slot Period",
                required: false,
              },
              description:
                "Slot Period in minutes. This is optional. Default is 30 minutes. Using this field, you can auto generate the slot period for your branch.",
            },
          }}
        />
      </div>
    </div>
  );
};

export default WorkingTime;
