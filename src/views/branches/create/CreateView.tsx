"use client";

import {
  BadgePlus,
  ChevronLeft,
  ChevronRight,
  Clock,
  ContactRoundIcon,
  Images,
  Info,
  PersonStanding,
  PlayCircle,
  Wallet,
} from "lucide-react";
import React, { useMemo } from "react";

import Stepper from "@/components/stepper";
import { Button } from "@/components/ui/button";
import type { Steppers } from "@/hooks/useStepper";
import useStepper from "@/hooks/useStepper";

import AvailableSlot from "./slide/AvailableSlot";
import BranchCreation from "./slide/BranchCreation";
import BranchDetails from "./slide/BranchDetails";
import Confirmation from "./slide/Confirmation";
import CourAvailability from "./slide/CourAvailability";
import CourtRegistration from "./slide/CourtRegistration";
import UplImagesUploader from "./slide/ImagesUploader";
import LisenseDetails from "./slide/LisenseDetails";
import WorkingTime from "./slide/WorkingTime";

export const CreateView = () => {
  const steppers: Steppers[] = [
    {
      icon: <BadgePlus />,
      label: "Branch Creation",
      key: "branch-creation",
    },

    {
      icon: <Wallet />,
      label: "Court availability",
      key: "court-availability",
    },
    {
      icon: <Info />,
      label: "Branch details",
      key: "branch-details",
    },
    {
      icon: <Images />,
      label: "Images",
      key: "images",
    },
    {
      icon: <ContactRoundIcon />,
      label: "Lisense details",
      key: "lisense-details",
    },
    {
      icon: <PlayCircle />,
      label: "Court registration",
      key: "court-registration",
    },
    {
      icon: <PersonStanding />,
      label: "Working Period",
      key: "working-period",
    },
    {
      icon: <Clock />,
      label: "Available slots",
      key: "available-slots",
    },
  ];

  const { activeStep, goBack, goNext } = useStepper({ steppers });
  const Silde = useMemo(() => {
    switch (steppers[activeStep]?.key) {
      case "branch-creation":
        return <BranchCreation />;
      case "court-availability":
        return <CourAvailability />;
      case "branch-details":
        return <BranchDetails />;
      case "images":
        return <UplImagesUploader />;
      case "lisense-details":
        return <LisenseDetails />;
      case "court-registration":
        return <CourtRegistration />;
      case "available-slots":
        return <AvailableSlot />;
      case "working-period":
        return <WorkingTime />;
      default:
        return <Confirmation />;
    }
  }, [activeStep]);
  return (
    <div className="relative flex size-full flex-col  gap-2  overflow-auto">
      <Stepper steppers={steppers} activeStep={activeStep} />
      <div className="relative w-[600px] flex-1  self-center overflow-auto rounded-lg xl:w-[800px]  ">
        {Silde}
      </div>
      <div className="flex items-center justify-center gap-20 ">
        <Button
          className="flex select-none items-center justify-center gap-2 px-4"
          disabled={activeStep === 0}
          onClick={() => {
            goBack();
          }}
        >
          <ChevronLeft />
          Back
        </Button>
        <Button
          className="flex select-none items-center justify-center gap-2 px-4"
          disabled={activeStep === steppers.length}
          onClick={() => {
            goNext();
          }}
        >
          Next <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
