"use server";

import ApiClient from "@/apiCallers";
import { Env } from "@/libs/Env.mjs";
import type { UserApiModal } from "@/types/user";

const apiClient = new ApiClient(Env.SERVER_URL as string);
export interface IResponseToken {
  message: string;
  accessToken: string;
  refreshToken: string;
}

type CredentialsArgument = Partial<Record<"email" | "password", unknown>>;
export const signIngApi = async ({ email, password }: CredentialsArgument) => {
  const res = await apiClient.post<IResponseToken>(`auth/login`, {
    email,
    password,
  }); // Replace User with your actual user type

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to login with Be");
  }

  return res;
};
export const getProfileApi = async (accessToken: string) => {
  const users = await apiClient.get<UserApiModal.ResponseProfile>(`auth/me`, {
    Authorization: `Bearer ${accessToken}`,
  }); // Replace User with your actual user type

  if (!users) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to get Access Token with Be");
  }

  return users;
};
