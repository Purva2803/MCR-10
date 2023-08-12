import { useContext, useState } from "react";
import { ProductContext } from "../context/products";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './../styles/addProduct.css'

const storeProductToLocalstorage = (product) => {
  const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
  storedProducts.push(product);
  localStorage.setItem('products', JSON.stringify(storedProducts));
};

export const AddProduct = () => {
    const navigate = useNavigate();
  const [product, setProduct] = useState({
    department: 'kitchen',
    name: '',
    description: '',
    price: '',
    stock: '',
    supplier: '',
    imageUrl: '',
    sku: '',
    delivered: '',

  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const productWithId = {id: idCount(), ...product};
    storeProductToLocalstorage(productWithId);
    setProduct(productWithId);
    console.log(productWithId);
    navigate('/products');
  };

  const idCount = (() => {
    let id = 10;
    return () => {
      id++;
      return id;
    };
  })();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="form">
        <h1>Add Product</h1>
        <form>
          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            value={product.department}
            onChange={handleInputChange}
          >
            <option value="kitchen">Kitchen</option>
            <option value="toys">Toys</option>
            <option value="clothing">Clothing</option>
          </select>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleInputChange}
          />
          <label htmlFor="supplier">Supplier</label>
          <input
            type="text"
            id="supplier"
            name="supplier"
            value={product.supplier}
            onChange={handleInputChange}
          />
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Add Product</button>
        </form>
      </div>
    </>
  );
};

// name: 'Stainless Steel Cookware Set',
// description:
//   'A set of high-quality stainless steel cookware including pots and pans.',
// price: 149.99,
// stock: 15,
// sku: 'KITCH001',
// supplier: 'KitchenWonders Inc.',
// delivered: 15,
// imageUrl: 'https://m.media-amazon.com/images/I/616vJsA33kL.jpg',
