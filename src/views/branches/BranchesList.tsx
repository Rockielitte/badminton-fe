import { DataTable } from "@/components/table/DataTable";
import type { IBranch } from "@/public/interfaces/branch.interface";

import { columns, sampleData } from "./helper";

export default async function BranchesList() {
  return (
    <div className=" relative size-full overflow-auto">
      <DataTable columns={columns} data={sampleData as IBranch[]} />
    </div>
  );
}
