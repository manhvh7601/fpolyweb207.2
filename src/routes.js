import { HomePage } from "page/homePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminRoute from "./auth/adminRoute";
import AdminLayout from "./layouts/adminLayouts";
import WebsiteLayout from "./layouts/websiteLayouts";
import DashBoard from "./page/admin/dashboard";
import AddFormProduct from "./page/admin/product/add";
import EditFormProduct from "./page/admin/product/edit";
import List from "./page/admin/product/index";
import Signin from "./page/website/signin";
import Signup from "./page/website/signup";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin/:path?/:path?/:path?">
          <AdminLayout>
            <Switch>
              <AdminRoute exact path="/admin">
                <DashBoard />
              </AdminRoute>
              <AdminRoute exact path="/admin/product">
                <List {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/product/add">
                <AddFormProduct {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/product/edit/:id">
                <EditFormProduct {...props} />
              </AdminRoute>
            </Switch>
          </AdminLayout>
        </Route>
        <Route>
          <WebsiteLayout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route>
            </Switch>
          </WebsiteLayout>
        </Route>
      </Switch>
    </BrowserRouter >
  );
};
export default Routes;