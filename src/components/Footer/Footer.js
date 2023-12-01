import { Link } from "react-router-dom";
import LinkedinIcon from "../../assets/linkedin-square.png";
import MeduimIcon from "../../assets/medium-square.png";
import InstagramIcon from "../../assets/instagram.png";
import "./Footer.css";

function Footer() {
    return (
      <div className="footer-container">
        <div className="links-container">
          <div className="column">
            <Link to="/">Home</Link>
            <Link to="/newsletter">NewsLetter</Link>
            <Link to="/navigation">Navigation</Link>
          </div>
          <div className="column">
            <Link to="/contacts">Contacts</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
        <div className="icons-container">
          <img src={LinkedinIcon} alt="linkedin" />
          <img src={MeduimIcon} alt="medium" />
          <img src={InstagramIcon} alt="instagram" />
        </div>
      </div>
    );
  }
  
  export default Footer;