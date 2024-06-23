"use client";

import * as z from "zod";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { Button } from "@/components/ui/button";
import { BranchStatusEnum, CourtStatusEnum } from "@/types";

import { FieldType } from "./ImagesUpload";

const courtSchema = z.object({
  name: z.string({
    // Add a validation message for the field
    message: "Name is required",
  }),
  type: z.string({
    // Add a validation message for the field
    message: "Type is required",
  }),

  price: z.coerce.number().positive({ message: "Price is required" }),
  images: z.string().array().nonempty("At least one image is required"),
  description: z.string({
    // Add a validation message for the field
    message: "Description is required",
  }),

  status: z
    .nativeEnum(CourtStatusEnum, {
      message: "Status is required",
    })
    .default(CourtStatusEnum.PENDING),
});
const SlotSchema = z.object({
  weekDay: z.string({
    message: "Week day is required",
  }),
  startTime: z.string({
    // Add a validation message for the field
    message: "Start time is required",
  }),

  endTime: z.string({
    // Add a validation message for the field
    message: "End time is required",
  }),

  surcharge: z.coerce.number().positive("Surcharge must be a positive number"),
});

// Define your form schema using zod
const formSchema = z.object({
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

  availableTime: z.string({
    // Add a validation message for the field
    message: "Available time is required",
  }),

  status: z
    .nativeEnum(BranchStatusEnum, {
      message: "Status is required",
    })
    .default(BranchStatusEnum.PENDING),
  manager: z.string({
    message: "Manager is required",
  }),
  images: z.any({
    message: "At least one image is required",
  }),
  license: z.any({
    message: "At least one file is required",
  }),
  courts: z.array(courtSchema).nonempty("At least one court is required"),
  slots: z.array(SlotSchema).nonempty("At least one slot is required"),
});

export function BranchAutoForm() {
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
        name: {
          inputProps: {
            placeholder: "Branch name",
          },
        },
        phone: {
          inputProps: {
            placeholder: "Phone number",
          },
        },
        address: {
          inputProps: {
            placeholder: "Branch address",
          },
        },
        description: {
          inputProps: {
            placeholder: "Branch description",
          },
        },
        availableTime: {
          inputProps: {
            placeholder: "Branch available time",
          },
        },
        status: {
          inputProps: {
            readOnly: true,
            disabled: true,
            placeholder: "Branch status",
          },
        },
        manager: {
          inputProps: {
            placeholder: "Branch manager",
          },
        },
        images: {
          fieldType: FieldType,
        },
        license: {
          fieldType: "file",
          inputProps: {
            multiple: true,
          },
        },
        courts: {
          renderParent: ({ children }) => (
            <div className="flex items-end gap-3">
              <div className="flex-1">{children}</div>
              <div>
                <Button type="button">Check</Button>
              </div>
            </div>
          ),
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
