import '../styles/sidebar.css'
import { NavLink } from 'react-router-dom'
import '../styles/department.css'
export const Departments = () => {

    return (
        <>
        <div className="main-content">
            <h1>Departments</h1>
            <div className="department">
                <NavLink to="/departments/Kitchen" activeClassName="active">
                
               <h1>Kitchen</h1>
                </NavLink>
                <NavLink to="/departments/Toys" activeClassName="active">
               <h1>Toys</h1>
                </NavLink>
                <NavLink to="/departments/Clothing" activeClassName="active">

               <h1>Clothing</h1>
                </NavLink>

               </div>
        </div>
        </>
    )
}
