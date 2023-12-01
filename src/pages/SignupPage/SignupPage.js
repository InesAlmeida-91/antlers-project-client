import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.services";
import "./SignupPage.css";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };
    authService
      .signup(requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => {
        const errorMessage = err?.response?.data?.message ?? "Internal error";
        setErrorMessage(errorMessage);
      });
  };

  return (

    <div className="signup-background">
      <div className="container">
        <h2>Sign up</h2>

        <form onSubmit={handleSubmit}>
          <label>Name </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign up</button>
        </form>


        <div>
            <p>Already have an account?</p>
            <Link to="/login" className="link-login"> Log in</Link>
        </div>
        
      </div>
    </div>
  );
}

export default SignupPage;