import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import placeholderImg from "@/public/assets/images/placeholder.png";

export default function PlaceholderContent({
  children = null,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Card className="relative mt-6 h-full overflow-auto rounded-lg border-none">
      <CardContent className="h-full overflow-auto p-6">
        {!children ? (
          <div className="flex min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)] items-center justify-center">
            <Image
              src={placeholderImg}
              alt="Placeholder Image"
              width={500}
              height={500}
              priority
            />
          </div>
        ) : (
          <div className="relative h-[calc(100vh-56px-64px-20px-24px-56px-48px)]  overflow-auto p-4">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
