/* eslint-disable react/jsx-key */
import React, { lazy } from "react";
import AuthorizedRoute from "base-shell/lib/components/AuthorizedRoute";
import UnauthorizedRoute from "base-shell/lib/components/UnauthorizedRoute";

const SignIn = lazy(() => import("../pages/SignIn/SignIn"));

const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const PasswordReset = lazy(() =>
  import("../pages/PasswordReset/PasswordReset")
);
const MyAccount = lazy(() => import("../pages/MyAccount/MyAccount"));
const Providers = lazy(() => import("../pages/Providers/index"));
const System = lazy(() => import("../pages/System/index"));
const Snapshots = lazy(() => import("../pages/Snapshots/index"));
const Log = lazy(() => import("../pages/Log/index"));
const routes = [
  {
    path: "/signin",
    exact: true,
    element: (
      <UnauthorizedRoute>
        <SignIn redirectTo="/providers" />
      </UnauthorizedRoute>
    ),
  },
  {
    path: "/signup",
    exact: true,
    element: (
      <UnauthorizedRoute>
        <SignUp redirectTo="/providers" />
      </UnauthorizedRoute>
    ),
  },
  {
    path: "/password_reset",
    exact: true,
    element: (
      <UnauthorizedRoute>
        <PasswordReset redirectTo="/providers" />
      </UnauthorizedRoute>
    ),
  },
  {
    path: "/my_account",
    exact: true,
    element: (
      <AuthorizedRoute>
        <MyAccount />
      </AuthorizedRoute>
    ),
  },
  {
    path: "/providers",
    exact: true,
    element: (
      <AuthorizedRoute>
        <Providers />
      </AuthorizedRoute>
    ),
  },
  {
    path: "/system",
    exact: true,
    element: (
      <AuthorizedRoute>
        <System />
      </AuthorizedRoute>
    ),
  },
  {
    path: "/snapshots",
    exact: true,
    element: (
      <AuthorizedRoute>
        <Snapshots />
      </AuthorizedRoute>
    ),
  },
  {
    path: "/log",
    exact: true,
    element: (
      <AuthorizedRoute>
        <Log />
      </AuthorizedRoute>
    ),
  },
];

export default routes;
