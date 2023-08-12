import "../../src/styles/sidebar.css";
import { NavLink } from "react-router-dom";
import { inventoryData } from "../data/data";
import { useEffect, useState } from "react";
import "../styles/card.css";

export const Dashboard = () => {
  const [count, setCount] = useState(0);

  const getStoredProducts = () => {
    const storedProducts =
      JSON.parse(localStorage.getItem("products")) || inventoryData;
    return storedProducts;
  };

  const [products, setProducts] = useState(getStoredProducts());

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const totalStock = () => {
    const total = products.reduce((acc, product) => {
      return acc + product.stock;
    }, 0);
    return total;
  };

  const totalDelivered = () => {
    const total = products.reduce((acc, product) => {
      return acc + product.delivered;
    }, 0);
    return total;
  };

  const calculateLowStock = () => {
    let total = 0;

    products.forEach((product) => {
      console.log(product.stock);
      if (product.stock <= 10) {
        total += 1;
      }
    });

    return total;
  };

  // Calculate the low stock count only once
  const lowStockCount = calculateLowStock();

  return (
    <>

      <h1 >Dashboard</h1>
      <div className="card">
        <div>
        <h2>Total Stock</h2>
        <h2>{totalStock()}</h2>
        </div>
        <div>
        <h2>Total Delivered</h2>
        <h2>{totalDelivered()}</h2>
        </div>
        <div>
        <h2>Low Stock</h2>
        <h2>{lowStockCount}</h2>
        </div>
      </div>
    </>
  );
};
