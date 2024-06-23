import { BadgePlus, Hourglass, Trash, ZapIcon } from "lucide-react";
import React from "react";
import { z } from "zod";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { Badge } from "@/components/ui/badge";
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
import { WeekDayEnum } from "@/types";

import { PeriodTimeFieldType } from "./PeriodTimeField";

type Props = {};
const SlotSchema = z.object({
  weekDay: z.nativeEnum(WeekDayEnum, {
    message: "Week day is required",
  }),
  availableTime: z.string({
    // Add a validation message for the field
    message: "Available time is required",
  }),
  surcharge: z.coerce.number().positive("Surcharge must be a positive number"),
});

const AvailableSlot = (props: Props) => {
  return (
    <div className="flex size-full flex-col gap-2 overflow-auto">
      <h1 className="text-center text-2xl font-bold uppercase">
        WeekDay Slot Setup{" "}
      </h1>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-3xl text-destructive">*</span>
        You must provide us with the general information about your branch. You
        can auto generate the slot period for your branch based on your previous
        setup.
        <div className="flex  items-center justify-end gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="ml-auto flex items-center gap-3">
                <BadgePlus /> Add slot
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[80%] overflow-auto sm:max-w-xl">
              <DialogHeader>
                <DialogTitle>Add new slot</DialogTitle>
                <DialogDescription>
                  Fill out the form below to add a new court
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <AutoForm
                  formSchema={SlotSchema}
                  fieldConfig={{
                    availableTime: {
                      fieldType: PeriodTimeFieldType,
                      // fieldType: TimePickerDemo,
                      description: "Available time must be a valid time",
                    },
                    weekDay: {
                      inputProps: {
                        placeholder: "Week Day",
                      },
                    },
                    surcharge: {
                      inputProps: {
                        placeholder: "Surcharge",
                        defaultValue: 0,
                      },
                      description: "Surcharge must be a positive number",
                    },
                  }}
                >
                  <AutoFormSubmit className="w-full">
                    <DialogFooter className="w-full">
                      <Button className="w-full" type="submit">
                        Save changes
                      </Button>
                    </DialogFooter>
                  </AutoFormSubmit>
                </AutoForm>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" className="flex items-center gap-2">
            <ZapIcon /> Fast generate slots
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2  border-t p-2">
        <div className="flex w-full flex-col gap-2">
          <span className="font-semibold">Monday</span>
          <div className="grid  grid-cols-12 gap-2">
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <span className="font-semibold">Monday</span>
          <div className="grid  grid-cols-12 gap-2">
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
          </div>
        </div>{" "}
        <div className="flex w-full flex-col gap-2">
          <span className="font-semibold">Monday</span>
          <div className="grid  grid-cols-12 gap-2">
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
          </div>
        </div>{" "}
        <div className="flex w-full flex-col gap-2">
          <span className="font-semibold">Monday</span>
          <div className="grid  grid-cols-12 gap-2">
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
            <Badge
              variant="secondary"
              className="col-span-4 flex cursor-pointer items-center gap-1 py-2 transition-all duration-300 ease-in  hover:bg-gray-400"
            >
              <Hourglass className="text-sm" />
              <span className="text-xs">07:00-08:00</span>
              <Trash className="bottom-1 right-1 z-30 ml-auto rounded-full bg-red-200 p-2 text-red-700 opacity-40 shadow-md transition-all duration-300 ease-in hover:scale-125 hover:opacity-100" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableSlot;
