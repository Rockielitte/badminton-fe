import React from "react";

import BranchDetail from "@/views/branches/BranchtDetail";

const page = ({ params }: { params: { branchId: String } }) => {
  const { branchId } = params;
  return <BranchDetail branchId={branchId} />;
};

export default page;
