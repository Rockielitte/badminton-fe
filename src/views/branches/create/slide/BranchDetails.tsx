import React from "react";
import { z } from "zod";

import AutoForm from "@/components/ui/auto-form";

type Props = {};

export const detailsFormSchema = z.object({
  name: z.string({
    // Add a validation message for the field
    message: "Name is required",
  }),
  phone: z.string({
    // Add a validation message for the field
    message: "Phone is required",
  }),
  address: z.string({
    // Add a validation message for the field
    message: "Address is required",
  }),

  description: z.string({
    // Add a validation message for the field
    message: "Description is required",
  }),

  // availableTime: z.string({
  //   // Add a validation message for the field
  //   message: "Available time is required",
  // }),
});
const BranchDetails = (props: Props) => {
  return (
    <div className="flex size-full flex-col gap-2 overflow-auto">
      <h1 className="text-center text-2xl font-bold uppercase">
        General Information
      </h1>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-3xl text-destructive">*</span>
        You must provide us with the general information about your branch
        {/* <Button variant="outline" className="flex items-center gap-2">
          <ShoppingBagIcon /> Extend your subscriptions
        </Button> */}
      </div>
      <div className="flex  items-center border-t p-2">
        <AutoForm
          formSchema={detailsFormSchema}
          fieldConfig={{
            name: {
              inputProps: {
                placeholder: "Branch name",
              },
              description: "Name of your branch",
            },
            phone: {
              inputProps: {
                placeholder: "Phone number",
              },
              description: "Phone number of your branch",
            },
            address: {
              inputProps: {
                placeholder: "Address",
              },
              description: "Address of your branch",
            },
            description: {
              inputProps: {
                placeholder: "Description",
              },
              description: "Description of your branch",
            },
            availableTime: {
              inputProps: {
                placeholder: "Available time",
              },
              description: "Available time of your branch",
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

export default BranchDetails;
