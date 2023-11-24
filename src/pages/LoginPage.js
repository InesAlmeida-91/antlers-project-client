import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.services";

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
      <div>
        <h3>Log In</h3>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
  
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
  
          <button type="submit">Log In</button>
  
          <div>
            <p></p>
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </div>
        </form>
      </div>
    );
  }
  
  export default LoginPage;