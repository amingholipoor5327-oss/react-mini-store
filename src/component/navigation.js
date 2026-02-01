import { Link, useLocation } from "react-router-dom";
export const Nav = () => {
  const location = useLocation();   
 
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
            
               🛒 Cart

            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};