import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Wishlist from "./pages/wishlist";
import Header from "./components/header/Header";
import Cart from "./pages/cart";
import Admin from "./pages/admin/Admin";
import Create from "./pages/admin/Create";
import Manage from "./pages/admin/Manage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="create" element={<Create />} />
          <Route path="manage" element={<Manage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
