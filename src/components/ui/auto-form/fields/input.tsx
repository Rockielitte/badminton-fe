import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { PasswordInput } from "../../password-input";
import AutoFormLabel from "../common/label";
import AutoFormTooltip from "../common/tooltip";
import type { AutoFormInputComponentProps } from "../types";

export default function AutoFormInput({
  label,
  isRequired,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) {
  const { showLabel: tempLable, ...fieldPropsWithoutShowLabel } = fieldProps;
  const showLabel = tempLable === undefined ? true : tempLable;
  const type = fieldProps.type || "text";

  return (
    <div className="flex flex-row  items-center space-x-2">
      <FormItem className="flex w-full flex-col justify-start">
        {showLabel && (
          <AutoFormLabel
            label={fieldConfigItem?.label || label}
            isRequired={isRequired}
          />
        )}
        <FormControl>
          {type === "password" ? (
            <PasswordInput {...fieldPropsWithoutShowLabel} />
          ) : (
            <Input type={type} {...fieldPropsWithoutShowLabel} />
          )}
        </FormControl>
        <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
        <FormMessage />
      </FormItem>
    </div>
  );
}
