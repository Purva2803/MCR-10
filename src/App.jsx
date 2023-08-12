import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Departments } from "./components/departments";
import { Products } from "./components/products";
import { Dashboard } from "./components/dashboard";
import { Routes, NavLink, Route } from "react-router-dom";
import "../src/styles/sidebar.css";
import { AddProduct } from "../src/pages/AddProduct";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="sidebar">
          <div className="navlink">
            <NavLink to="/" activeClassName="active">
              Dashboard
            </NavLink>
            <NavLink to="/departments" activeClassName="active">
              Departments
            </NavLink>
            <NavLink to="/products" activeClassName="active">
              Products
            </NavLink>
          </div>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/products" element={<Products />} />

            <Route path="/addProduct" element={<AddProduct />} />

            <Route path="/departments/:department" element={<Products />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
