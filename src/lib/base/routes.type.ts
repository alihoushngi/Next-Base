// Interface for a route with a path and a getter function
interface Route {
  path: string;
  get?: (slug: string) => string;
}

// Interface for a collection of routes
interface AuthRoutes {
  login: Route;
}

// Main interface for the full route object
export interface APIRoutes {
  auth: AuthRoutes;
}
