import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context"; 

function Navbar() {
    const { isLoggedIn, logOutUser, user } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
 
      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to="/contacts">
        <button>Contacts</button>
      </Link>

      {isLoggedIn ? (
        <>
            <p>Welcome, {user.name}!</p>
          <button onClick={logOutUser}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/signup">
            <button>Signup</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;