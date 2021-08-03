import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >

        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/admin/dashboard"
            >
              <span data-feather="home" />
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/admin/product"
              activeClassName="active"
            >
              <span data-feather="shopping-cart" />
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/category" activeClassName="active">
              <span data-feather="shopping-cart" />
              Category
            </NavLink>
          </li>
        </ul>
    </nav>
  );
}
