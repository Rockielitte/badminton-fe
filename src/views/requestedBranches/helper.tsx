"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { DataTableColumnHeader } from "@/components/table/ColumnHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { IBranch } from "@/interfaces/branch.interface";
import image from "@/public/assets/images/banner.jpeg";

export const columns: ColumnDef<IBranch>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "images",
    header: "Image",
    cell: ({ row }) => {
      const img = row.getValue("images") as string | File | StaticImport[];
      return (
        <Image
          src={img[0]}
          alt="branch"
          width={10}
          height={10}
          className="size-10 rounded-full object-cover"
        />
      );
    },
  },

  {
    accessorKey: "name",
    cell: ({ getValue }) => {
      const data = getValue() as string;
      return <span>{data}</span>;
    },
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Branch name" />;
    },
  },
  {
    accessorKey: "address",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Address" />;
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Phone" />;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
  },

  {
    id: "actions",
    header: "Actions",

    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="size-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View branch</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
export const sampleData = [
  {
    _id: "63a4c8f8a0d1b0b58c1b2345",
    name: "Pink Branch",
    phone: "555-1234567",
    address: "123 Main Street, Anytown USA",
    images: [image],
    license: ["ABC123", "XYZ456"],
    description:
      "Our central branch offers the best sports courts and facilities in the city. Come check us out!",
    availableTime: "Monday - Sunday, 7AM - 10PM",
    status: "Pending",
    manager: "63a4c8f8a0d1b0b58c1b2346",
    courts: [
      {
        _id: "63a4c8f8a0d1b0b58c1b2347",
        name: "Basketball Court 1",
        type: "BASKETBALL",
        size: "FULL",
        images: ["https://example.com/court1.jpg"],
      },
      {
        _id: "63a4c8f8a0d1b0b58c1b2348",
        name: "Tennis Court 1",
        type: "TENNIS",
        size: "FULL",
        images: ["https://example.com/court2.jpg"],
      },
    ],
    slots: [
      {
        _id: "63a4c8f8a0d1b0b58c1b2349",
        startTime: "2024-06-11T08:00:00",
        endTime: "2024-06-11T09:00:00",
        courtId: "63a4c8f8a0d1b0b58c1b2347",
        status: "AVAILABLE",
      },
      {
        _id: "63a4c8f8a0d1b0b58c1b2350",
        startTime: "2024-06-11T09:00:00",
        endTime: "2024-06-11T10:00:00",
        courtId: "63a4c8f8a0d1b0b58c1b2348",
        status: "BOOKED",
      },
    ],
  },
  {
    _id: "63a4c8f8a0d1b0b58c1b2345",
    name: "Central Branch",
    phone: "555-1234567",
    address: "123 Main Street, Anytown USA",
    images: [image],
    license: ["ABC123", "XYZ456"],
    description:
      "Our central branch offers the best sports courts and facilities in the city. Come check us out!",
    availableTime: "Monday - Sunday, 7AM - 10PM",
    status: "Pending",
    manager: "63a4c8f8a0d1b0b58c1b2346",
    courts: [
      {
        _id: "63a4c8f8a0d1b0b58c1b2347",
        name: "Basketball Court 1",
        type: "BASKETBALL",
        size: "FULL",
        images: ["https://example.com/court1.jpg"],
      },
      {
        _id: "63a4c8f8a0d1b0b58c1b2348",
        name: "Tennis Court 1",
        type: "TENNIS",
        size: "FULL",
        images: ["https://example.com/court2.jpg"],
      },
    ],
    slots: [
      {
        _id: "63a4c8f8a0d1b0b58c1b2349",
        startTime: "2024-06-11T08:00:00",
        endTime: "2024-06-11T09:00:00",
        courtId: "63a4c8f8a0d1b0b58c1b2347",
        status: "AVAILABLE",
      },
      {
        _id: "63a4c8f8a0d1b0b58c1b2350",
        startTime: "2024-06-11T09:00:00",
        endTime: "2024-06-11T10:00:00",
        courtId: "63a4c8f8a0d1b0b58c1b2348",
        status: "BOOKED",
      },
    ],
  },
  {
    _id: "63a4c8f8a0d1b0b58c1b2345",
    name: "Central Branch",
    phone: "555-1234567",
    address: "123 Main Street, Anytown USA",
    images: [image],
    license: ["ABC123", "XYZ456"],
    description:
      "Our central branch offers the best sports courts and facilities in the city. Come check us out!",
    availableTime: "Monday - Sunday, 7AM - 10PM",
    status: "Pending",
    manager: "63a4c8f8a0d1b0b58c1b2346",
    courts: [
      {
        _id: "63a4c8f8a0d1b0b58c1b2347",
        name: "Basketball Court 1",
        type: "BASKETBALL",
        size: "FULL",
        images: ["https://example.com/court1.jpg"],
      },
      {
        _id: "63a4c8f8a0d1b0b58c1b2348",
        name: "Tennis Court 1",
        type: "TENNIS",
        size: "FULL",
        images: ["https://example.com/court2.jpg"],
      },
    ],
    slots: [
      {
        _id: "63a4c8f8a0d1b0b58c1b2349",
        startTime: "2024-06-11T08:00:00",
        endTime: "2024-06-11T09:00:00",
        courtId: "63a4c8f8a0d1b0b58c1b2347",
        status: "AVAILABLE",
      },
      {
        _id: "63a4c8f8a0d1b0b58c1b2350",
        startTime: "2024-06-11T09:00:00",
        endTime: "2024-06-11T10:00:00",
        courtId: "63a4c8f8a0d1b0b58c1b2348",
        status: "BOOKED",
      },
    ],
  },
  {
    _id: "63a4c8f8a0d1b0b58c1b2345",
    name: "Central Branch",
    phone: "555-1234567",
    address: "123 Main Street, Anytown USA",
    images: [image],
    license: ["ABC123", "XYZ456"],
    description:
      "Our central branch offers the best sports courts and facilities in the city. Come check us out!",
    availableTime: "Monday - Sunday, 7AM - 10PM",
    status: "Pending",
    manager: "63a4c8f8a0d1b0b58c1b2346",
    courts: [
      {
        _id: "63a4c8f8a0d1b0b58c1b2347",
        name: "Basketball Court 1",
        type: "BASKETBALL",
        size: "FULL",
        images: ["https://example.com/court1.jpg"],
      },
      {
        _id: "63a4c8f8a0d1b0b58c1b2348",
        name: "Tennis Court 1",
        type: "TENNIS",
        size: "FULL",
        images: ["https://example.com/court2.jpg"],
      },
    ],
    slots: [
      {
        _id: "63a4c8f8a0d1b0b58c1b2349",
        startTime: "2024-06-11T08:00:00",
        endTime: "2024-06-11T09:00:00",
        courtId: "63a4c8f8a0d1b0b58c1b2347",
        status: "AVAILABLE",
      },
      {
        _id: "63a4c8f8a0d1b0b58c1b2350",
        startTime: "2024-06-11T09:00:00",
        endTime: "2024-06-11T10:00:00",
        courtId: "63a4c8f8a0d1b0b58c1b2348",
        status: "BOOKED",
      },
    ],
  },
];
