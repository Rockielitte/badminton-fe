/* eslint-disable import/no-extraneous-dependencies, import/extensions */
/** @type {import('next').NextConfig} */
import "./src/libs/Env.mjs";
// import withBundleAnalyzer from "@next/bundle-analyzer";
import withNextIntl from "next-intl/plugin";

const withNextIntlConfig = withNextIntl("./src/libs/i18n.ts");
// import nextIntl from "next-intl/plugin";

// const withNextIntl = nextIntl("./i18n/i18n.ts");

export default withNextIntlConfig;
