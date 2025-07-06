// src/i18n/types.ts
import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: {
        welcome: string;
      };
    };
  }
}
