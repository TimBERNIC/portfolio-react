/**
 * Routes de l'application - évite les typos et centralise les paths
 */
export const ROUTES = {
  home: "/home",
  fullstack: "/fullstack",
  frontend: "/frontend",
  contact: "/contact",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
