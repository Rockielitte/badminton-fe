import React from "react";

import { CreateView } from "@/views/branches/create/CreateView";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="size-full overflow-auto">
      <CreateView />
    </div>
  );
};

export default page;
