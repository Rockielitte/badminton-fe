import type { IManager } from "./manager.interface";
import type { IPackageCourt } from "./packageCourt.interface";

export interface IPackagePurchase {
  totalPrice: number;
  totalCourt: number;
  startDate: Date;
  endDate: Date;
  manager?: IManager;
  packageCourt?: IPackageCourt;
}
