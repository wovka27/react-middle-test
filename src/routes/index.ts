import MainPage from "../pages/MainPage";
import RefillPage from "../pages/RefillPage";

export interface IRoute {
  path: string;
  element: any;
}

export enum RouteNames {
  MAIN = "/",
  REFILL = "/refill/:id",
}

export const routes: IRoute[] = [
  { path: RouteNames.MAIN, element: MainPage },
  { path: RouteNames.REFILL, element: RefillPage },
];
