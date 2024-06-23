"use client";

import { BanknoteIcon, Eye, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import * as z from "zod";

import { plan } from "@/app/[locale]/(normalUser)/(auth)/subscriptions/order/[slug]/page";
import { PricingCard } from "@/app/[locale]/(normalUser)/(auth)/subscriptions/page";
import { subscriptionFormSchema } from "@/components/Subscription/SubcriptionForm";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import cardimg from "@/public/assets/images/cardbank.png";
import vnpay from "@/public/assets/images/vnpay.png";

const cardSchema = z.object({
  accountNumber: z.string().min(16).max(16),
  accountName: z.string(),
  accountBank: z.string().min(5).max(5),
  expDate: z.coerce.date(),
});

type Props = {};

const CheckoutSubcription = (props: Props) => {
  const [payment, setPayment] = useState<"bank" | "tranfer">("bank");
  return (
    <div className=" mx-auto my-10 flex w-[600px] flex-col items-center gap-5">
      <div className="text-xl font-semibold">Checkout confirmation</div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-3xl text-destructive">*</span>
        You are about to checkout with the following subscription, please review
        and confirm all details before proceeding.
      </div>
      <div className="flex w-full flex-col gap-4 ">
        <div className="flex w-full flex-col gap-2 rounded-md border-2 border-dashed p-2">
          <span className="border-b font-semibold ">Subscription details</span>
          <div className="flex w-full flex-col items-center gap-4">
            <div className="col-span-1  p-5 ">
              <PricingCard key={plan.title} {...plan} isYearly={false} />
            </div>
            <div className="w-full border-t-2 p-2">
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
                      disabled: true,
                      placeholder: "Total court",
                    },
                  },
                  duration: {
                    inputProps: {
                      disabled: true,
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
              </AutoForm>
            </div>
          </div>
          <span className="text-center text-2xl underline underline-offset-2">
            <strong>Total price:</strong> $10
          </span>
        </div>
        <div className="flex w-full flex-col gap-2 rounded-md border-2 border-dashed p-2">
          <span className="flex items-center  justify-between border-b py-2 font-semibold">
            Payment method
            {payment === "bank" && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="flex items-center gap-1"
                    variant="secondary"
                  >
                    <Plus />
                    Add new card
                  </Button>
                </DialogTrigger>
                <DialogContent className="flex max-h-[50%] flex-col overflow-auto sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle>Add new card</DialogTitle>
                    <DialogDescription>
                      Fill out the form below to add a new court
                    </DialogDescription>
                  </DialogHeader>
                  <div className="relative flex-1 gap-4 overflow-auto p-2">
                    <AutoForm formSchema={cardSchema} />
                  </div>
                  <DialogFooter className="w-full">
                    <Button className="w-full" type="submit">
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
            <Select
              value={payment}
              onValueChange={(value) => {
                setPayment(value as "bank" | "tranfer");
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Payment method</SelectLabel>
                  <SelectItem value="bank">Bank</SelectItem>
                  <SelectItem value="tranfer">Tranfer money</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </span>

          {payment === "bank" ? (
            <div className="flex w-full flex-col gap-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label
                    htmlFor="option-two"
                    className="flex w-full items-center gap-2"
                  >
                    <div className="flex w-full items-center gap-2  rounded-md border-2 p-2">
                      <Image
                        src={cardimg}
                        alt="img"
                        className="size-20 rounded-md border object-contain p-1 shadow-md"
                      />
                      <div className="flex flex-col">
                        <span className="text-xl font-semibold">
                          VCB - Vietcombank
                        </span>
                        <span className="text-sm">Trương Nhật Quang</span>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Eye className="ml-auto cursor-pointer" />
                        </DialogTrigger>
                        <DialogContent className="flex max-h-[50%] flex-col overflow-auto sm:max-w-xl">
                          <DialogHeader>
                            <DialogTitle>Add new card</DialogTitle>
                            <DialogDescription>
                              Fill out the form below to add a new court
                            </DialogDescription>
                          </DialogHeader>
                          <div className="relative flex-1 gap-4 overflow-auto p-2">
                            <AutoForm formSchema={cardSchema} />
                          </div>
                          <DialogFooter className="w-full">
                            <Button className="w-full" type="submit">
                              Save changes
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label
                    htmlFor="option-one"
                    className="flex w-full items-center gap-2"
                  >
                    <div className="flex w-full items-center gap-2  rounded-md border-2 p-2">
                      <Image
                        src={cardimg}
                        alt="img"
                        className="size-20 rounded-md border object-contain p-1 shadow-md"
                      />
                      <div className="flex flex-col">
                        <span className="text-xl font-semibold">
                          VCB - Vietcombank
                        </span>
                        <span className="text-sm">Trương Nhật Quang</span>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Eye className="ml-auto cursor-pointer" />
                        </DialogTrigger>
                        <DialogContent className="flex max-h-[50%] flex-col overflow-auto sm:max-w-xl">
                          <DialogHeader>
                            <DialogTitle>Add new card</DialogTitle>
                            <DialogDescription>
                              Fill out the form below to add a new court
                            </DialogDescription>
                          </DialogHeader>
                          <div className="relative flex-1 gap-4 overflow-auto p-2">
                            <AutoForm formSchema={cardSchema} />
                          </div>
                          <DialogFooter className="w-full">
                            <Button className="w-full" type="submit">
                              Save changes
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          ) : (
            <div className="flex w-full flex-col gap-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label
                    htmlFor="option-two"
                    className="flex w-full items-center gap-2"
                  >
                    <div className="flex w-full items-center gap-2  rounded-md border-2 p-2">
                      <Image
                        src={vnpay}
                        alt="img"
                        className="size-20 rounded-md border object-contain p-1 shadow-md"
                      />
                      <div className="flex flex-col">
                        <span className="text-xl font-semibold">VNPay</span>
                        <span className="text-sm">Bookminton</span>
                      </div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label
                    htmlFor="option-one"
                    className="flex w-full items-center gap-2"
                  >
                    <div className="flex w-full items-center gap-2  rounded-md border-2 p-2">
                      <Image
                        src={vnpay}
                        alt="img"
                        className="size-20 rounded-md border object-contain p-1 shadow-md"
                      />
                      <div className="flex flex-col">
                        <span className="text-xl font-semibold">VNpay</span>
                        <span className="text-sm">Bookminton</span>
                      </div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="flex w-full items-center gap-2" type="button">
              <BanknoteIcon />
              Checkout
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Please review your subscription details before proceeding to
                checkout.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default CheckoutSubcription;
