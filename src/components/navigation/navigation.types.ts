export interface NavigationRoute {
  id: number;
  label: string;
  path: string;
}

export const NAVIGATION_ROUTES: NavigationRoute[] = [
  {
    id: 1,
    label: "// home",
    path: "/",
  },
  {
    id: 2,
    label: "// about",
    path: "/about",
  },
  {
    id: 3,
    label: "// projects",
    path: "/projects",
  },
  {
    id: 4,
    label: "// articles",
    path: "/articles",
  },
];
