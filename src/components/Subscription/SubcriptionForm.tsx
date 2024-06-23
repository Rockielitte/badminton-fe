"use client";

import { useRouter } from "next/navigation";
import * as z from "zod";

import AutoForm from "@/components/ui/auto-form";

import { Button } from "../ui/button";

// Define your form schema using zod
export const subscriptionFormSchema = z.object({
  totalCourt: z
    .number()
    .min(1, {
      message: "Duration is required",
    })
    .default(1),
  duration: z
    .number()
    .min(1, {
      message: "Duration is required",
    })
    .default(1)
    .describe("Months per court"),
});

export function SubscriptionAutoForm() {
  const router = useRouter();
  return (
    <AutoForm
      onSubmit={(value) => {
        console.log(value);
      }}
      // Pass the schema to the form
      formSchema={subscriptionFormSchema}
      // You can add additional config for each field
      // to customize the UI
      fieldConfig={{
        totalCourt: {
          inputProps: {
            placeholder: "Total court",
          },
        },
        duration: {
          description: "This duration will applied for all courts",
          inputProps: {
            placeholder: "Duration",
          },
        },
      }}
      // Optionally, define dependencies between fields
    >
      {/* 
      Pass in a AutoFormSubmit or a button with type="submit".
      Alternatively, you can not pass a submit button
      to create auto-saving forms etc.
      */}
      <p className="text-2xl underline underline-offset-2">
        <strong>Total price:</strong> $10
      </p>
      <Button className="w-full" onClick={() => router.push("checkout")}>
        Go to checkout
      </Button>

      {/*
      All children passed to the form will be rendered below the form.
      */}
    </AutoForm>
  );
}
