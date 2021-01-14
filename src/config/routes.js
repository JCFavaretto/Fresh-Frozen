// Layouts
import LayoutAdmin from "layouts/LayoutAdmin";
import LayoutBasic from "layouts/LayoutBasic";

// Admin Pages
import HomeAdmin from "pages/Admin/HomeAdmin";
import ItemsAdmin from "pages/Admin/ItemsAdmin";
import AddItem from "pages/Admin/AddItem";
import EditItem from "pages/Admin/EditItem";
import BannersAdmin from "pages/Admin/BannersAdmin";
import AdminTable from "pages/Admin/AdminTable";

// Pages
import Home from "pages/Home";
import Error404 from "pages/Error404";
import Products from "pages/Products";
import Login from "pages/Login";
import Comprar from "pages/Comprar";
import Nosotros from "pages/Nosotros";
import Orders from "pages/Orders";

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
        path: "/admin/items/:id",
        component: EditItem,
        exact: true,
      },
      {
        path: "/admin/items",
        component: ItemsAdmin,
        exact: true,
      },
      {
        path: "/admin/banners",
        component: BannersAdmin,
        exact: true,
      },
      {
        path: "/admin/admins",
        component: AdminTable,
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
        path: "/nosotros",
        component: Nosotros,
        exact: true,
      },
      {
        path: "/compras",
        component: Orders,
        exact: true,
      },
      {
        path: "/products",
        component: Products,
        exact: true,
      },
      {
        path: "/products/:cat",
        component: Products,
        exact: true,
      },
      {
        path: "/login",
        component: Login,
        exact: true,
      },
      {
        path: "/comprar",
        component: Comprar,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
