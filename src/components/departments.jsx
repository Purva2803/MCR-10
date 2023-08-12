import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";
import "../styles/card.css";
export const Departments = () => {
  return (
    <>
      <h1>Departments</h1>
      <div className="card">
        <div className="department">
          <NavLink to="/departments/Kitchen" activeClassName="active">
            <h1>Kitchen</h1>
          </NavLink>
        </div>
        <div className="department">
          <NavLink to="/departments/Toys" activeClassName="active">
            <h1>Toys</h1>
          </NavLink>
        </div>
        <div className="department">
          <NavLink to="/departments/Clothing" activeClassName="active">
            <h1>Clothing</h1>
          </NavLink>
        </div>
      </div>
    </>
  );
};
