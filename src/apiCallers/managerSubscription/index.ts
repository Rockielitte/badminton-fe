"use server";

/* eslint-disable no-underscore-dangle */
import { mockRequest } from "@/lib/mockRequest";
import {
  type PackageCourtSchemaType,
  sampleData,
} from "@/views/AdminSubscriptions/helper";

import { fetcher } from "..";

export const getSubscriptionList = async () => {
  return fetcher("package-purchase/get-my-purchases");
};

export const postSubscriptionListAPI = async (data: PackageCourtSchemaType) => {
  // return fetcher("package-court", {
  //   body: JSON.stringify(data),
  //   method: "POST",
  // });

  return mockRequest(sampleData);
};
export const putSubscriptionListAPI = async (data: PackageCourtSchemaType) => {
  // return fetcher("package-court", {
  //   body: JSON.stringify(data),
  //   method: "POST",
  // });

  return mockRequest(sampleData);
};
