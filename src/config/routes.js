// Layouts
import LayoutAdmin from "layouts/LayoutAdmin";
import LayoutBasic from "layouts/LayoutBasic";

// Admin Pages
import HomeAdmin from "pages/Admin/HomeAdmin";
import AddItem from "pages/Admin/AddItem";

// Pages
import Home from "pages/Home";
import Error404 from "pages/Error404";
import Products from "pages/Products";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: HomeAdmin,
        exact: true,
      },
      {
        path: "/admin/additem",
        component: AddItem,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/products",
        component: Products,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
