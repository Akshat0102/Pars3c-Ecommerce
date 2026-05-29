import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserRound } from "lucide-react";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <h2>Pars3c</h2>
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to="/auth">
            <UserRound size={26} />
          </Link>
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
