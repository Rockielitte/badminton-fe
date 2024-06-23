import { useState } from "react";

import { TimePickerDemo } from "@/components/time-picker/TimePicker";
import type { AutoFormInputComponentProps } from "@/components/ui/auto-form/types";

export const PeriodTimeFieldType = ({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex w-full flex-col gap-2 ">
      <span className="flex items-center gap-1 text-sm font-medium">
        {label}{" "}
        {isRequired && <span className="text-sm text-destructive">*</span>}
      </span>
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-md border-2 border-dashed p-2">
          <span className="flex items-center gap-1 text-sm font-medium">
            Start time <span className="text-sm text-destructive">*</span>
          </span>
          <TimePickerDemo
            disabled={fieldConfigItem.inputProps?.disabled}
            date={date}
            setDate={setDate}
          />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-md border-2 border-dashed p-2">
          <span className="flex items-center gap-1 text-sm font-medium">
            End time <span className="text-sm text-destructive">*</span>
          </span>
          <TimePickerDemo
            disabled={fieldConfigItem.inputProps?.disabled}
            date={date}
            setDate={setDate}
          />
        </div>
      </div>
      <span className="text-sm text-gray-500">
        {fieldConfigItem.description}
      </span>
    </div>
  );
};
