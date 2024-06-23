"use client";

import * as z from "zod";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { GenderEnum, RoleEnum, UserStatusEnum } from "@/types";

import { Button } from "../ui/button";

// Define your form schema using zod
const formSchema = z.object({
  username: z.string({ message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().optional(),
  role: z.nativeEnum(RoleEnum, { message: "Role is required" }),
  gender: z.nativeEnum(GenderEnum).optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  status: z.nativeEnum(UserStatusEnum, {
    message: "Status is required",
  }),
  dob: z.coerce.date().optional(),
});

export function AccountAutoForm() {
  return (
    <AutoForm
      onSubmit={(value) => {
        console.log(value);
      }}
      // Pass the schema to the form
      formSchema={formSchema}
      // You can add additional config for each field
      // to customize the UI
      fieldConfig={{
        role: {
          inputProps: {
            readOnly: true,
            disabled: true,
            className: "col-span-1",
          },
        },
        status: {
          inputProps: {
            readOnly: true,
            disabled: true,
          },
        },

        password: {
          // Use "inputProps" to pass props to the input component
          // You can use any props that the component accepts
          inputProps: {
            type: "password",
            placeholder: "••••••••",
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
      <AutoFormSubmit>Send now</AutoFormSubmit>

      {/*
      All children passed to the form will be rendered below the form.
      */}
      <p className="text-sm text-gray-500">
        By submitting this form, you agree to our
        <Button variant="link" className="text-primary underline">
          terms and conditions
        </Button>
        .
      </p>
    </AutoForm>
  );
}
