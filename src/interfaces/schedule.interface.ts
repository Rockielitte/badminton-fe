import type { IBooking } from "./booking.interface";
import type { ICourt } from "./court.interface";

export interface ISchedule {
  _id?: string;
  type: string;
  slots: string[];
  startTime: string;
  endTime: string;
  date: string;
  booking?: string | IBooking;
  court: string | ICourt;
  status: string;
}
