import OilImage from "../../assets/home-img.png";
import "./CaseStudies.css";

function CaseStudies() {
    return (
        <div className="page-background">
            <div className="page-background-image">
                <div className="center-container">
                    <h1>Autonomous gas leak detection</h1>
                </div>
                <div className="page-white-background">
                    <div className="flex-container">
                        <div className="text-container">
                            <h2 className="case-title">Lorem ipsum dolor sit amet?</h2>
                            <p className="case-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <img src={OilImage} alt="Oil" className="case-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseStudies;