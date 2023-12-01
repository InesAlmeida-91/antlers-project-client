import './App.css';
import { Routes, Route, Outlet } from "react-router-dom"; 
import Navbar from "./components/NavBar/Navbar"; 
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import Products from './pages/Products';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import Regulation from './pages/Regulation';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Company from './pages/Company';
import SignupPage from './pages/SignupPage/SignupPage';
import NewsLetter from './pages/NewsLetter';
import Contacts from './pages/Contacts';
import Navigation from './pages/Navigation';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" 
              element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="products" element={<Products />} />
          <Route path="company" element={<Company/>} />
          <Route path="industries" element={<Industries />} />
          <Route path="cases" element={<CaseStudies />} />
          <Route path="regulation" element={<Regulation />} />
          <Route path="newsletter" element={<NewsLetter />} />
          <Route path="navigation" element={<Navigation />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
