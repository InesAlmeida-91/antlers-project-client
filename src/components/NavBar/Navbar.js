import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context"; 
import Logo2 from "../../assets/logo2.png";
import "./Navbar.css"

function Navbar() {
    const { isLoggedIn, logOutUser, user } = useContext(AuthContext);  

  return (
    <nav>
      <div className="navbar-background">
        <div className="navbar-container">
          <Link to="/"><img src={Logo2} alt="Mika Logo" className="logo" /></Link>
          <div>
            <Link to="/products" className="navbar-links">Products</Link>
            <Link to="/industries" className="navbar-links">Industries</Link>
            <Link to="/cases" className="navbar-links">Case Studies</Link>
            <Link to="/regulation" className="navbar-links">Regulation</Link>
            <Link to="/company"className="navbar-links" >Company</Link>
              {isLoggedIn ? (
                <>
                    <p>Welcome, {user.name}!</p>
                  <button onClick={logOutUser}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="navbar-links">Login</Link>
                </>
              )}
            </div>
          </div>
        </div>
    </nav>
  );
}
 
export default Navbar;