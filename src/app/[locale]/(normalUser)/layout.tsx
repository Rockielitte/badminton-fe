// eslint-disable-next-line
import { auth } from "@/auth";
import Footer from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import type { NavItem } from "@/types/nav";
import type { Session } from "next-auth";

export default async function Layout(props: { children: React.ReactNode }) {
  const session = await auth();
  // const t = useTranslations("RootLayout");
  const NavItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Activity",
      href: "#activity",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
    {
      title: "Subscriptions",
      href: "/subscriptions",
    },
  ];
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col border-x border-dashed ">
      <MainNav items={NavItems} session={session as Session} />
      <div className="p-2 py-4">{props.children}</div>
      <Footer />
    </div>
  );
}
