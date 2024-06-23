import React from "react";

import { TransactionList } from "@/components/TransactionList";
import { Separator } from "@/components/ui/separator";

type Props = {};

const HistoryPage = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-medium">Balance History</h3>
        <p className="text-sm text-muted-foreground">
          view balance history of your account
        </p>
      </div>
      <Separator />
      <TransactionList />
    </div>
  );
};

export default HistoryPage;
