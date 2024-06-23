import { SidebarNav } from "@/components/CmsSideBar";

const sidebarNavItems = [
  {
    title: "Account",
    href: "/me/account",
  },
  {
    title: "Schedule",
    href: "/me/schedule",
  },
  {
    title: "Booking your court",
    href: "/me/booking",
  },
  {
    title: "Booking reciepts",
    href: "/me/reciepts",
  },
  {
    title: "Balance history",
    href: "/me/history",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className=" flex flex-col gap-2 p-2 px-4">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      {/* <Separator className="my-2" /> */}
      <div className="flex w-full flex-col gap-4  rounded-md border border-dashed  p-4 shadow-sm lg:flex-row">
        <aside className=" rounded-md border-r pr-3 lg:w-1/5  ">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="max-w-xl flex-1 ">{children}</div>
      </div>
    </div>
  );
}
