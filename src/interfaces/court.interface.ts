import type { CourtStatusEnum } from "@/types";

import type { IManager } from "./manager.interface";

export interface ICourt {
  _id?: string;
  name: string;
  type: string;
  price: number;
  images?: File[] | string[];
  description: string;
  status: CourtStatusEnum;
  branch?: string | IManager;
}
