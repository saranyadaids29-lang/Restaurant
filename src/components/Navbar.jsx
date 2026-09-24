import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getUser, signOut } from "../utils/auth";

function Navbar() {

  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser);

  useEffect(() => {
    const updateUser = () => setUser(getUser());

    window.addEventListener("restaurant-auth-change", updateUser);
    window.addEventListener("storage", updateUser);

    return () => {
      window.removeEventListener("restaurant-auth-change", updateUser);
      window.removeEventListener("storage", updateUser);
    };
  }, []);

  function handleSignOut() {
    signOut();
    navigate("/", { replace: true });
  }

  return (
    <nav className="navbar">

      <NavLink to="/" className="logo">
        🍴 Tasty Bites
      </NavLink>

      <div className="nav-links">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/menu">
          Menu
        </NavLink>

        <NavLink to="/orders">
          Orders
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/cart" className="cart-link">
          🛒 Cart
          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}
        </NavLink>

        {user ? (
          <>
            <NavLink to="/profile" className="nav-login">
              Hi, {user.name.split(" ")[0]}
            </NavLink>
            <button type="button" className="nav-logout" onClick={handleSignOut}>
              Sign out
            </button>
          </>
        ) : (
          <NavLink to="/login" className="nav-login">
            Login
          </NavLink>
        )}

      </div>

    </nav>
  );
}

export default Navbar;