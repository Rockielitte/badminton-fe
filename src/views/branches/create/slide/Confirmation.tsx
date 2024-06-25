import { Hourglass, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

import AutoForm from "@/components/ui/auto-form";
import { Badge } from "@/components/ui/badge";
import type { Steppers } from "@/hooks/useStepper";
import defaultBadminton from "@/public/assets/images/defaultBadminton.jpeg";
import defaultFile from "@/public/assets/images/fileIcon.png";
import defaultImage from "@/public/assets/images/loginBanner.jpeg";
import secondImage from "@/public/assets/images/signupBanner.jpeg";

import { detailsFormSchema } from "./BranchDetails";
import { amountFormSchema } from "./CourAvailability";
import { PeriodTimeFieldType } from "./PeriodTimeField";
import { workingTimeFormSchema } from "./WorkingTime";

type Props = {
  stepIndex: number;
  goNextFn: (number?: number) => void;
  goBackfn: (number?: number) => void;
  steppers: Steppers[];
};

const Confirmation = ({ goBackfn, goNextFn, steppers, stepIndex }: Props) => {
  return (
    <div className="flex size-full flex-col gap-4">
      <h1 className="text-center text-2xl font-bold uppercase">Confirmation</h1>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-3xl text-destructive">*</span>
        Please review the information before submitting, you can go back to
        refill the form if there is any mistake.
      </div>
      <div className="relative flex w-full items-center border-t  pr-2">
        <div className="mt-10 flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-2 rounded-md border-2 border-dashed p-2">
            <span className="border-b font-semibold ">Court availability</span>
            <AutoForm
              formSchema={amountFormSchema}
              fieldConfig={{
                amount: {
                  inputProps: {
                    disabled: true,
                    defaultValue: 1,
                    placeholder: "Amount of court",
                  },
                },
              }}
            />
          </div>
          <div className="flex w-full flex-col gap-2 rounded-md border-2 border-dashed p-2">
            <span className="border-b font-semibold">Branch details</span>
            <AutoForm
              formSchema={detailsFormSchema}
              fieldConfig={{
                name: {
                  inputProps: {
                    placeholder: "Branch name",
                    defaultValue: "Boon Lay Branch",
                    disabled: true,
                  },
                },
                phone: {
                  inputProps: {
                    placeholder: "Phone number",
                    defaultValue: "12345678",
                    disabled: true,
                  },
                },
                address: {
                  inputProps: {
                    placeholder: "Address",
                    defaultValue: "Boon Lay",
                    disabled: true,
                  },
                },
                description: {
                  inputProps: {
                    placeholder: "Description",
                    defaultValue: "Boon Lay Branch",
                    disabled: true,
                  },
                },
              }}
            >
              {/* <AutoFormSubmit>
        <Button className="flex items-center gap-2">Create</Button>
      </AutoFormSubmit> */}
            </AutoForm>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-md border-2 border-dashed p-2">
            <span className="border-b font-semibold">Images</span>
            <div className="grid  w-full grid-cols-6 gap-2">
              <div className="col-span-2 flex items-center rounded-md border p-2">
                <Image
                  src={defaultImage}
                  alt="image"
                  className="h-40 w-full object-contain"
                />
              </div>
              <div className="col-span-2 rounded-md border p-2">
                <Image
                  src={secondImage}
                  alt="image"
                  className="h-40 w-full object-contain"
                />
              </div>
              <div className="col-span-2 flex items-center rounded-md border p-2">
                <Image
                  src={defaultImage}
                  alt="image"
                  className="h-40 w-full object-contain"
                />
              </div>
              <div className="col-span-2 rounded-md border p-2">
                <Image
                  src={secondImage}
                  alt="image"
                  className="h-40 w-full object-contain"
                />
              </div>{" "}
              <div className="col-span-2 flex items-center rounded-md border p-2">
                <Image
                  src={defaultImage}
                  alt="image"
                  className="h-40 w-full object-contain"
                />
              </div>
              <div className="col-span-2 rounded-md border p-2">
                <Image
                  src={secondImage}
                  alt="image"
                  className="h-40 w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-md border-2 border-dashed p-2">
            <span className="border-b font-semibold">Licenses</span>
            <div className="flex w-full flex-col gap-2">
              <div className="flex w-full cursor-pointer items-center gap-2 rounded-md bg-gray-50 p-2 transition-all duration-200 ease-in hover:bg-accent">
                <Image
                  src={defaultFile}
                  alt="fileImage"
                  className="size-4 object-contain"
                />
                <span className="hover:underline">Branch-licenses.doc</span>
              </div>
              <div className="flex w-full cursor-pointer items-center gap-2 rounded-md bg-gray-50 p-2 transition-all duration-200 ease-in hover:bg-accent">
                <Image
                  src={defaultFile}
                  alt="fileImage"
                  className="size-4 object-contain"
                />
                <span className="hover:underline">Branch-licenses.doc</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-md border-2 border-dashed p-2">
            <span className="border-b font-semibold">Courts registration</span>
            <div className="grid w-full grid-cols-4 gap-10 overflow-auto">
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
          <div className="flex w-full flex-col gap-2 rounded-md border-2 border-dashed p-2">
            <span className="border-b font-semibold">Open time</span>
            <AutoForm
              formSchema={workingTimeFormSchema}
              fieldConfig={{
                availableTime: {
                  fieldType: PeriodTimeFieldType,
                  inputProps: {
                    disabled: true,
                  },
                  // fieldType: TimePickerDemo,
                },
                SlotPeriod: {
                  inputProps: {
                    required: false,
                    disabled: true,
                    placeholder: "Slot Period",
                    value: 30,
                  },
                },
              }}
            >
              {/* <AutoFormSubmit>
    <Button className="flex items-center gap-2">Create</Button>
  </AutoFormSubmit> */}
            </AutoForm>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-md border-2 border-dashed p-2">
            <span className="border-b font-semibold">Slot registration</span>
            <div className="flex w-full flex-col gap-2 overflow-auto">
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
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
