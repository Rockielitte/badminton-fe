import { zodResolver } from "@hookform/resolvers/zod";
import { BadgePlus, Trash, ZapIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AutoForm from "@/components/ui/auto-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import defaultBadminton from "@/public/assets/images/defaultBadminton.jpeg";
import { CourtStatusEnum } from "@/types";

import { FieldType } from "../../ImagesUpload";

type Props = {};
export const courtSchema = z.object({
  name: z.string({
    // Add a validation message for the field
    message: "Name is required",
  }),
  type: z.string({
    // Add a validation message for the field
    message: "Type is required",
  }),

  price: z.coerce.number().positive({ message: "Price is required" }),

  description: z.string({
    // Add a validation message for the field
    message: "Description is required",
  }),

  status: z
    .nativeEnum(CourtStatusEnum, {
      message: "Status is required",
    })
    .default(CourtStatusEnum.PENDING),
  images: z.any({
    message: "Images is required",
  }),
});
const formSchema = z.object({
  courts: z
    .array(courtSchema)
    .describe("Courts information")
    .nonempty("At least one court is required"),
});
type SchemaType = z.infer<typeof formSchema>;
const CourRegistration = (props: Props) => {
  const form = useForm<SchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courts: [],
    },
  });
  return (
    <div className="flex size-full flex-col gap-4">
      <h1 className="text-center text-2xl font-bold uppercase">
        Court Registration
      </h1>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-3xl text-destructive">*</span>
        You must fill out courts registration form to create a branch.
        <div className="flex  items-center justify-end gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="ml-auto flex items-center gap-3">
                <BadgePlus /> Add Court
              </Button>
            </DialogTrigger>
            <DialogContent className="flex max-h-[50%] flex-col overflow-auto sm:max-w-xl">
              <DialogHeader>
                <DialogTitle>Add new court</DialogTitle>
                <DialogDescription>
                  Fill out the form below to add a new court
                </DialogDescription>
              </DialogHeader>
              <div className="relative flex-1 gap-4 overflow-auto p-2">
                <AutoForm
                  formSchema={courtSchema}
                  fieldConfig={{
                    images: {
                      fieldType: FieldType,
                    },
                  }}
                />
              </div>
              <DialogFooter className="w-full">
                <Button className="w-full" type="submit">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button variant="outline" className="flex items-center gap-2">
            <ZapIcon /> Fast generate courts
          </Button>
        </div>
      </div>
      <div className="grid w-full grid-cols-4 gap-10 border-t py-2">
        <div className="relative z-10 col-span-2 flex cursor-pointer items-center gap-4 rounded-md border-2 border-dashed p-3 shadow-sm hover:bg-accent">
          <Trash className="absolute bottom-1 right-1 z-30 rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />

          <Image
            alt="defaultBadminton"
            src={defaultBadminton}
            className="size-20 rounded-md object-cover shadow-md"
          />
          <div className="flex flex-1 flex-col gap-1 ">
            <span className="text-lg font-semibold">Badminton court</span>
            <span className="text-sm text-gray-700 underline underline-offset-2">
              50000 VND
            </span>
            <span className="text-xs text-gray-500">Pending</span>
          </div>
        </div>
        <div className="col-span-2 flex cursor-pointer items-center gap-4 rounded-md border-2 border-dashed p-3 shadow-sm hover:bg-accent">
          <Image
            alt="defaultBadminton"
            src={defaultBadminton}
            className="size-20 rounded-md object-cover shadow-md"
          />
          <div className="flex flex-1 flex-col gap-1 ">
            <span className="text-lg font-semibold">Badminton court</span>
            <span className="text-sm text-gray-700 underline underline-offset-2">
              50000 VND
            </span>
            <span className="text-xs text-gray-500">Pending</span>
          </div>
        </div>
        <div className="col-span-2 flex cursor-pointer items-center gap-4 rounded-md border-2 border-dashed p-3 shadow-sm hover:bg-accent">
          <Image
            alt="defaultBadminton"
            src={defaultBadminton}
            className="size-20 rounded-md object-cover shadow-md"
          />
          <div className="flex flex-1 flex-col gap-1 ">
            <span className="text-lg font-semibold">Badminton court</span>
            <span className="text-sm text-gray-700 underline underline-offset-2">
              50000 VND
            </span>
            <span className="text-xs text-gray-500">Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourRegistration;
