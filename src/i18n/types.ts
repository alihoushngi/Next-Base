import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: Record<string, unknown>;
      landing: Record<string, unknown>;
      footer: Record<string, unknown>;
      navbar: Record<string, unknown>;
    };
  }
}
