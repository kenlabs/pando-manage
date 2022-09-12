/* eslint-disable react/jsx-key */
import React, { lazy } from "react";

const Providers = lazy(() => import("../pages/Providers/index"));
const System = lazy(() => import("../pages/System/index"));
const Snapshots = lazy(() => import("../pages/Snapshots/index"));
const routes = [
  // {
  //   path: "/signin",
  //   exact: true,
  //   element: (
  //     <UnauthorizedRoute>
  //       <SignIn redirectTo="/providers" />
  //     </UnauthorizedRoute>
  //   ),
  // },
  // {
  //   path: "/signup",
  //   exact: true,
  //   element: (
  //     <UnauthorizedRoute>
  //       <SignUp redirectTo="/providers" />
  //     </UnauthorizedRoute>
  //   ),
  // },
  // {
  //   path: "/password_reset",
  //   exact: true,
  //   element: (
  //     <UnauthorizedRoute>
  //       <PasswordReset redirectTo="/providers" />
  //     </UnauthorizedRoute>
  //   ),
  // },
  // {
  //   path: "/my_account",
  //   exact: true,
  //   element: (
  //     <AuthorizedRoute>
  //       <MyAccount />
  //     </AuthorizedRoute>
  //   ),
  // },
  {
    path: "/providers",
    exact: true,
    element: <Providers />,
  },
  {
    path: "/system",
    exact: true,
    element: <System />,
  },
  {
    path: "/snapshots",
    exact: true,
    element: <Snapshots />,
  },
  // {
  //   path: "/log",
  //   exact: true,
  //   element: (
  //     <AuthorizedRoute>
  //       <Log />
  //     </AuthorizedRoute>
  //   ),
  // },
];

export default routes;
