import React from "react";

import { DataTable } from "@/components/table/DataTable";

import { columns, sampleData } from "./helper";

type Props = {};

const RequestBranchList = (props: Props) => {
  return (
    <div className=" relative size-full overflow-auto">
      <DataTable columns={columns} data={sampleData as []} canCreate={false} />
    </div>
  );
};

export default RequestBranchList;
