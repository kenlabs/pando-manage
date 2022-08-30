import React from "react";
import {
  AccountBox as AccountBoxIcon,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
  Lock as LockIcon,
} from "@mui/icons-material";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
const getMenuItems = (props) => {
  const { intl, menuContext, auth: authData } = props;

  const { isAuthMenuOpen } = menuContext;

  const { auth, setAuth } = authData;

  const isAuthorized = auth.isAuthenticated;

  // if (isAuthMenuOpen || !isAuthorized) {
  //   return [
  //     {
  //       value: "/my_account",
  //       primaryText: intl.formatMessage({
  //         id: "my_account",
  //         defaultMessage: "My Account",
  //       }),
  //       leftIcon: <AccountBoxIcon />,
  //     },
  //     {
  //       value: "/signin",
  //       onClick: isAuthorized
  //         ? () => {
  //             setAuth({ isAuthenticated: false });
  //           }
  //         : () => {},
  //       visible: true,
  //       primaryText: isAuthorized
  //         ? intl.formatMessage({ id: "sign_out" })
  //         : intl.formatMessage({ id: "sign_in" }),
  //       leftIcon: isAuthorized ? <ExitToAppIcon /> : <LockIcon />,
  //     },
  //   ];
  // }
  return [
    {
      value: "/providers",
      visible: isAuthorized,
      primaryText: "Providers",
      leftIcon: <AcUnitIcon />,
    },
    {
      value: "/system",
      visible: isAuthorized,
      primaryText: "System",
      leftIcon: <SettingsSystemDaydreamIcon />,
    },
    {
      value: "/snapshots",
      visible: isAuthorized,
      primaryText: "Snapshots",
      leftIcon: <GraphicEqIcon />,
    },
    // {
    //   value: "/log",
    //   visible: isAuthorized,
    //   primaryText: "Log",
    //   leftIcon: <DashboardIcon />,
    // },
  ];
};
export default getMenuItems;
