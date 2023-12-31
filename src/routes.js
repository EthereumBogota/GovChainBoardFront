/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Login from "views/Login.js";

import Dashboard from "views/Dashboard.js";
import DashboardGeneral from "views/DashboardGeneral.js";
import DashboardProposal from "views/DashboardProposal.js";
import DashboardParticipant from "views/DashboardParticipant.js";
import Documentation from "views/Documentation.js";
import Logout from "views/Logout.js";

var routes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: <Dashboard />,
  // componentUnlogged: <Login />,

  //   layout: "/dashboard",
    // //   isPrivate: true,

  // },
  {

    path: "/user",
    name: "User",
    rtlName: "",
    icon: "tim-icons icon-single-02",
    component: <Logout />,
    componentUnlogged: <Login />,
    layout: "/dashboard",
    isPrivate: false,
    // redirect: true,

  },
  // {
  //   path: "/general",
  //   name: "DAO General",
  //   rtlName: "",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: <DashboardGeneral />,
  // componentUnlogged: <Login />,

  //   layout: "/dashboard",
    // //   isPrivate: true,

  // },
  {
    path: "/proposal",
    name: "DAO Proposal",
    rtlName: "",
    icon: "tim-icons icon-chart-pie-36",
    component: <DashboardProposal />,
    componentUnlogged: <Login />,
    layout: "/dashboard",
    isPrivate: true,
  },
  // {
  //   path: "/participant",
  //   name: "DAO Participant",
  //   rtlName: "",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: <DashboardParticipant />,
  // componentUnlogged: <Login />,
  //   layout: "/dashboard",
    //   isPrivate: true,

  // },
  {
    path: "/documentation",
    name: "Documentation",
    rtlName: "",
    icon: "tim-icons icon-book-bookmark",
    component: <Documentation />,
    componentUnlogged: <Login />,
    layout: "/dashboard",
    isPrivate: true,
  },
  /* {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <Icons />,
    layout: "/dashboard",
    isPrivate: true,
  }, */
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: <Map />,
  //   layout: "/dashboard",
    // //   isPrivate: true,

  // },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <Notifications />,
    componentUnlogged: <Login />,
    layout: "/dashboard",
    isPrivate: true,
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: <UserProfile />,
  //   layout: "/dashboard",
    // //   isPrivate: true,

  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: <TableList />,
  //   layout: "/dashboard",
    // //   isPrivate: true,

  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: <Typography />,
  //   layout: "/dashboard",
  // //   isPrivate: true,
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: <Rtl />,
  //   layout: "/rtl",
  // //   isPrivate: true,
  // },
];
export default routes;
