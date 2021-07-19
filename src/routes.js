import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import DashBoard from "./page/admin/dashboard";
import AddFormProduct from "./page/admin/product/add";
import EditFormProduct from "./page/admin/product/edit";
import List from "./page/admin/product/index";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav></Nav>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route exact path="/">
                  <DashBoard />
                </Route>
                <Route exact path="/product">
                  <List {...props}/>
                </Route>
                <Route exact path="/product/add">
                  <AddFormProduct {...props} />
                </Route>
                <Route exact path="/product/:id/edit">
                  <EditFormProduct {...props} />
                </Route>
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
