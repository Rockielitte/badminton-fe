import { ReactHookFormDemo } from "@/_components/react-hook-form-demo";
import type { AutoFormInputComponentProps } from "@/components/ui/auto-form/types";

export const FieldType = ({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) => (
  <ReactHookFormDemo field={field} label={label} isRequired={isRequired} />
);
