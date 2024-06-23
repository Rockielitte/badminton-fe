import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { UserAuthForm } from "@/components/AuthForm";
import banner from "@/public/assets/images/banner.jpeg";
import logo from "@/public/assets/images/logo.png";

export const dynamic = "force-dynamic";
export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "SignIn",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default function AuthenticationPage() {
  return (
    <div className="container relative grid h-full  min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col rounded-md  bg-zinc-950 p-4   font-bold text-white dark:border-r lg:flex">
        <div className="absolute inset-0  flex size-full items-center justify-center rounded-md ">
          <Image
            className=" h-full object-contain "
            alt="Badminton banner"
            src={banner}
          />
        </div>
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image src={logo} alt="Bookminton" width={40} />
          Bookminton
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              “I love the game of badminton. It is a game of skill, subtlety,
              and precision.”
            </p>
            <footer className="text-sm">Bookminton teams</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
            <p className="text-sm text-muted-foreground">
              Complete our form below to sign in your account
            </p>
          </div>
          <UserAuthForm type="sign-in" />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
