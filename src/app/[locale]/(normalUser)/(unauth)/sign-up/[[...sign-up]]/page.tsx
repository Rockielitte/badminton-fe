import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { UserAuthForm } from "@/components/AuthForm";
import SignUpRoleSelect from "@/components/SignUpRoleSelect";
import banner from "@/public/assets/images/signupBanner.jpeg";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "SignUp",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}
export default function AuthenticationPage() {
  return (
    <div className="container relative grid h-full min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="absolute right-0 top-0">
        <SignUpRoleSelect />
      </div>
      <div className="relative hidden h-full flex-col rounded-md    font-bold text-white dark:border-r lg:flex">
        <div className="absolute inset-0  flex size-full items-center justify-center rounded-md ">
          <Image
            className=" h-[90%] object-contain "
            alt="Badminton banner"
            src={banner}
          />
        </div>
      </div>
      <div
        className="relative
      lg:p-8
      "
      >
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            {/* <div className="relative z-20 flex items-center justify-center  text-2xl font-semibold">
              <Image src={logo} alt="Bookminton" width={40} />
              Bookminton
            </div> */}
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Complete our form below to create your account
            </p>
          </div>
          <UserAuthForm type="sign-up" />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
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
