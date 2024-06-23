import type { BranchStatusEnum } from "@/types";

import type { ICourt } from "./court.interface";
import type { IManager } from "./manager.interface";
import type { ISlot } from "./slot.interface";

export interface IBranch {
  _id?: string;
  name: string;
  phone: string;
  address: string;
  images?: File[] | string[];
  license: string[];
  description: string;
  availableTime: string;
  status?: BranchStatusEnum;
  manager?: string | IManager;
  courts: ICourt[];
  slots: ISlot[];
}
