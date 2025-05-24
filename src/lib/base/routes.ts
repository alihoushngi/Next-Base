import { APIRoutes } from "./routes.type";

export const getAPIRoute = (): APIRoutes => {
  const routes: APIRoutes = {
    auth: {
      login: { path: "auth/login" },
    },
  };
  return routes;
};
