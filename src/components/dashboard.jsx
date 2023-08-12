import '../../src/styles/sidebar.css'
import { NavLink } from 'react-router-dom'
import { inventoryData } from '../data/data'
import { useEffect, useState } from 'react'

export const Dashboard = () => {
    const [count, setCount] = useState(0);
  
    const getStoredProducts = () => {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || inventoryData;
      return storedProducts;
    };
  
    const [products, setProducts] = useState(getStoredProducts());
  
    useEffect(() => {
      localStorage.setItem('products', JSON.stringify(products));
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
        <div className="main-content">
          <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard-content">
              <div className="dashboard-content-item">
                <h1>Total Stock</h1>
                <h1>{totalStock()}</h1>
                <h1>Total Delivered</h1>
                <h1>{totalDelivered()}</h1>
                <h1>Low Stock</h1>
                <h1>{lowStockCount}</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
