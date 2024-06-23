import React from "react";

import { AccountAutoForm } from "@/components/Account/AccountForm";

type Props = {};

const Account = (props: Props) => {
  return (
    <div className="relative flex h-full  flex-col gap-4 ">
      <h1 className="text-2xl font-semibold">Setting account</h1>
      <div className="relative mx-auto w-[600px] flex-1  p-4">
        <AccountAutoForm />
      </div>
    </div>
  );
};

export default Account;
