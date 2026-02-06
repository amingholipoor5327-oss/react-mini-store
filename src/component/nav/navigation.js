import { Link, useLocation } from "react-router-dom";
import "./nav.css"
import { useContext } from "react";
import { Shopcontext } from "../coustom-hooks/usecontext";
 export const Nav = () => {
  const location = useLocation();

  const {cartItem} = useContext(Shopcontext)   
 const  cartNum = cartItem?.reduce((prev , next)=>{
  return prev + next.count  
 }, 0 )

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand">
          🚀 Amin Coding
        </Link>
        
        <ul className="nav-menu">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            >
              🏪 Shop
            </Link>
          </li>
          <li>
            <Link 
              to="/cart" 
              className={`nav-link ${location.pathname === "/cart" ? "active" : ""}`}
            >
            {cartNum>0 && <span className="number">{cartNum}</span>}
               🛒 Cart

            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};