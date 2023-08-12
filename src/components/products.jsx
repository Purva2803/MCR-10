import "../styles/table.css";
import { inventoryData } from "../data/data";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";


export const Products = () => {
  const { department } = useParams();
  const storedProducts = JSON.parse(localStorage.getItem('products')) || inventoryData;

  const [products, setProducts] = useState(storedProducts);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const filterProducts = (selectedDepartment) => {
    if (selectedDepartment === 'all') {
      setProducts(storedProducts);
    } else {
      const filteredProducts = storedProducts.filter(
        (product) => product.department === selectedDepartment
      );
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    if (department) {
      filterProducts(department);
    }
  }, [department]);

  const categoryChange = (sortBy) => {
    let sortedProducts = [];

    if (sortBy === 'price') {
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'name') {
      sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'stock') {
      sortedProducts = [...products].sort((a, b) => a.stock - b.stock);
    }

    setProducts(sortedProducts);
  };

  const showLowStock = () => {
    const lowStock = products.filter((product) => product.stock <= 10);
    setProducts(lowStock);
  };

  return (
    <>
      <div>
        <h1>Products</h1>
        <div>
          <NavLink to="/addProduct" activeClassName="active">
            Add Product
          </NavLink>
        </div>
        <div>
          <select onChange={(e) => filterProducts(e.target.value)}>
            <option value="Kitchen">Kitchen</option>
            <option value="Toys">Toys</option>
            <option value="Clothing">Clothing</option>
            <option value="all">All Departments</option>
          </select>
        </div>
      </div>
      <div>
        <input type="checkbox" id="stock" name="stock" value="stock" onChange={showLowStock} />
        <label htmlFor="stock">Low stock Items</label>
      </div>
      <div>
        <select onChange={(e) => categoryChange(e.target.value)}>
          <option value="price">Price</option>
          <option value="name">Name</option>
          <option value="stock">Stock</option>
        </select>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    width="100px"
                    height="100px"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>{item.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};


{
  /* id: 10,
      department: 'Kitchen',
      name: 'Blender with Multiple Speeds',
      description:
        'A powerful blender with multiple speed settings for various blending tasks.',
      price: 69.99,
      stock: 10,
      sku: 'KITCH004',
      supplier: 'BlendMaster Appliances',
      delivered: 10,
      imageUrl:
        'https://m.media-amazon.com/images/I/41dMtEjU3IL._AC_UF894,1000_QL80_.jpg', */
}
