import GoogleMaps from "../components/GoogleMaps";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navigation() {
    const { isLoggedIn } = useContext(AuthContext);

    return(
        <div>
            <div className="page-background">
                <div className="page-background-image">
                    <div>
                        <h1>Navigation</h1>
                    </div>
                </div>
            </div>
            {isLoggedIn ? (
                <GoogleMaps />
            ) : (
                <p>Please log in to view the map.</p>
             )}
        </div>
    )
};

export default Navigation;