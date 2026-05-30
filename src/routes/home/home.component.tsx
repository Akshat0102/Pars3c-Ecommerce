import { Link } from "react-router-dom";
import "./home.styles.scss";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home-background");
    return () => {
      document.body.classList.remove("home-background");
    };
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="overlay" />
        <div className="hero-content">
          <span className="welcome">Welcome</span>
          <h1>
            PREMIUM COFFEE &
            <br />
            ARTISAN CHOCOLATES
          </h1>
          <p>
            Crafted with passion and made from the finest ingredients. Discover
            rich coffee blends, indulgent chocolates, fresh baked breads,
            natural honey, and handcrafted cookies.
          </p>
          <Link to="/shop" className="shop-btn">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
