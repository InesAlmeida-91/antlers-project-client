import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.services";

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
    <div className="Signup">
      <h3>Sign up</h3>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign up</button>
      </form>

      <Link to="/login"> Already have an account? Log in</Link>
    </div>
  );
}

export default SignupPage;