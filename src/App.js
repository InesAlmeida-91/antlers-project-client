import './App.css';
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar"; 
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from './pages/LoginPage';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/signup" element={ <SignupPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contacts" element={ <Contacts /> } />
        <Route path="*" element={ <ErrorPage /> } /> 
      </Routes>
    </div>
  );
}

export default App;
