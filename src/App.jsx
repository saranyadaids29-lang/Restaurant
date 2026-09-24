import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {

  return (
    <>
      <Navbar />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/menu"
            element={<Menu />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

        </Routes>

      </main>

      <Footer />
    </>
  );
}

export default App;