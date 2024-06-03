import "@/styles/global.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

import Providers from "@/Contexts/TanstackProvider";
import { AppConfig } from "@/utils/AppConfig";

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};
export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(props.params.locale)) notFound();

  // Using internationalization in Client Components
  const messages = useMessages();
  // const session = getServerSession(authConfig);

  return (
    <html
      lang={props.params.locale}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          <Providers>
            <div className="mx-auto max-w-7xl border-x border-dashed  ">
              {props.children}
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
