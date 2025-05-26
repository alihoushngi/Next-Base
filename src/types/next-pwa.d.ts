declare module "next-pwa" {
  import { NextConfig } from "next";

  interface PWAOptions {
    dest: string;
    disable?: boolean;
    register?: boolean;
    skipWaiting?: boolean;
    buildExcludes?: RegExp[];
  }

  export default function withPWA(
    config: PWAOptions,
  ): (nextConfig: NextConfig) => NextConfig;
}
