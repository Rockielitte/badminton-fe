import { LayoutGrid, Settings } from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    // admin
    {
      groupLabel: "Account management",
      menus: [
        {
          href: "/dashboard/operators",
          label: "Operators",
          active: pathname.includes("/dashboard/operators"),
          icon: LayoutGrid,
          submenus: [],
        },
        {
          href: "/dashboard/managers",
          label: "Managers",
          active: pathname.includes("/dashboard/managers"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },

    {
      groupLabel: "Requested branches",
      menus: [
        {
          href: "/dashboard/requestedBranch",
          label: "Requested branches",
          active: pathname.includes("/dashboard/requestedBranch"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Subscriptions Management",
      menus: [
        {
          href: "/dashboard/subscriptions",
          label: "Subscriptions",
          active: pathname.includes("/dashboard/subscriptions"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    // manager
    {
      groupLabel: "Branches management",
      menus: [
        {
          href: "/dashboard/branches",
          label: "Branches",
          active: pathname.includes("/dashboard/branches"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    // court manager
    {
      groupLabel: "Branch management",
      menus: [
        {
          href: "/dashboard/courts",
          label: "Courts",
          active: pathname.includes("/dashboard/courts"),
          icon: LayoutGrid,
          submenus: [],
        },
        {
          href: "/dashboard/staffs",
          label: "Staffs",
          active: pathname.includes("/dashboard/staffs"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    // general
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/dashboard/account",
          label: "Account",
          active: pathname.includes("dashboard/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
