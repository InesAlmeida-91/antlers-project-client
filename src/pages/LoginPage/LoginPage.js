import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.services";
import "./LoginPage.css"; 

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();
    const { storeToken, authenticateUser } = useContext(AuthContext);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const requestBody = { email, password };
      authService
        .login(requestBody)
        .then((response) => {
          storeToken(response.data.authToken);
          authenticateUser();
          navigate('/');
        })
        .catch((err) => {
          const errorMessage = err?.response?.data?.message ?? 'Internal error';
          setErrorMessage(errorMessage);
        });
    };
  
    return (
      <div className="login-background">
      <div className="container">
        <h2>Log In</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
  
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
  
          <button type="submit">Log In</button>
  
          <div>
            <p>Don't have an account?</p>
            <Link to="/signup" className="link-signup"> Sign Up</Link>
          </div>
        </form>
      </div>
      </div>
    );
  }
  
  export default LoginPage;