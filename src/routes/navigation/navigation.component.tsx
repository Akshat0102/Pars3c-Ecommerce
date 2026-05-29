import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.css";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <h2>Pars3c</h2>
        </Link>

        <div className="nav-links">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
