import React from "react";

import RequestDetail from "@/views/requestedBranches/RequestDetail";

const page = ({ params }: { params: { branchId: String } }) => {
  const { branchId } = params;
  return <RequestDetail branchId={branchId} />;
};

export default page;
