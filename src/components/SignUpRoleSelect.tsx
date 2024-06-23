"use client";

import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RoleEnum } from "@/types";

const SignUpRoleSelect = () => {
  const [role, setRole] = React.useState<RoleEnum.CUSTOMER | RoleEnum.MANAGER>(
    RoleEnum.CUSTOMER
  );
  return (
    <div>
      <Select
        defaultValue={role === RoleEnum.CUSTOMER ? "Customer" : "Manager"}
        onValueChange={(value) => {
          setRole(value as RoleEnum.CUSTOMER | RoleEnum.MANAGER);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select your role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={RoleEnum.CUSTOMER}>Customer</SelectItem>
          <SelectItem value={RoleEnum.MANAGER}>Manager</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SignUpRoleSelect;
