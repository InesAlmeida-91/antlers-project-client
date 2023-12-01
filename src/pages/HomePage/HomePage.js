import Arrow from "../../assets/Vector.png";
import OilImage from "../../assets/home-img.png";
import MiniringImage from "../../assets/home-img2.png";
import ElectricImage from "../../assets/home-img3.png";
import PortsImage from "../../assets/home-img4.png";
import SolarImage from "../../assets/home-img5.png";
import IndustriaImage from "../../assets/home-img6.png";
import Square from "../../assets/blue-square.png";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage"> 
      <h3>Infrastructure Monitoring Platform</h3>

      <img src={Arrow} alt="arrow" className="arrow-img"/>

        <div className="grid">

        <div className="grid-item">
          <img src={OilImage} alt="Oil" className="grid-img" />
          <div className="blue-square">
            <img src={Square} alt="Oil" />
            <p>Oil & Gas</p>
          </div>
        </div>

        <div className="grid-item">
          <img src={MiniringImage} alt="Miniring" className="grid-img" />
          <div className="blue-square">
            <img src={Square} alt="Mining" />
            <p>Mining</p>
          </div>
        </div>

        <div className="grid-item">
          <img src={ElectricImage} alt="Electric" className="grid-img" />
          <div className="blue-square">
            <img src={Square} alt="Electric" />
            <p>Electric Utilities</p>
          </div>
        </div>

        <div className="grid-item">
          <img src={PortsImage} alt="Ports" className="grid-img"/>
          <div className="blue-square">
            <img src={Square} alt="Ports" />
            <p>Ports & Terminals</p>
          </div>
        </div>

        <div className="grid-item">
          <img src={SolarImage} alt="Solar" className="grid-img"/>
          <div className="blue-square">
            <img src={Square} alt="Solar Energy" />
            <p>Solar Energy</p>          
          </div>
        </div>

        <div className="grid-item">
          <img src={IndustriaImage} alt="Industrial" className="grid-img"/>
          <div className="blue-square">
            <img src={Square} alt="Industrial" />
            <p>Industrial Sites</p>            
          </div>
        </div>     
      </div>
    </div>
  );
}

export default HomePage;