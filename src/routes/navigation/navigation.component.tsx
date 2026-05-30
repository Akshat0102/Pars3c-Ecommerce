import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <h2>Pars3c</h2>
        </Link>
        <div className="nav-menu">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/our-story">
            Our Story
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
        <div className="nav-actions">
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
