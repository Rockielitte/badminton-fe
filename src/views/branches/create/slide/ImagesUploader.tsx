import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ReactHookFormDemo } from "@/_components/react-hook-form-demo";
import { FormField } from "@/components/ui/form";

const schema = z.object({
  images: z.array(z.instanceof(File)),
});

type Props = {};
type Schema = z.infer<typeof schema>;
const ImagesUploader = (props: Props) => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      images: [],
    },
  });
  return (
    <div className="flex size-full flex-col gap-2 overflow-auto">
      <h1 className="text-center text-2xl font-bold uppercase">
        Images Uploader
      </h1>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-3xl text-destructive">*</span>
        You must upload at least 1 image and can upload up to 4 images in your
        current subcriptions.
        {/* <Button variant="outline" className="flex items-center gap-2">
          <ShoppingBagIcon /> Extend your subscriptions
        </Button> */}
      </div>
      <div className="relative flex items-center border-t p-2">
        <FormField
          name="images"
          control={form.control}
          render={(field) => {
            return (
              <ReactHookFormDemo label="Images" isRequired field={field} />
            );
          }}
        />
      </div>
    </div>
  );
};

export default ImagesUploader;
