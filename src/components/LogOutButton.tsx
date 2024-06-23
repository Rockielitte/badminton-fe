"use client";

import { useTranslations } from "next-intl";

const LogOutButton = () => {
  // const router = useRouter();

  const t = useTranslations("DashboardLayout");

  return (
    <button
      className="border-none text-gray-700 hover:text-gray-900"
      type="button"
    >
      {t("sign_out")}
    </button>
  );
};

export { LogOutButton };
