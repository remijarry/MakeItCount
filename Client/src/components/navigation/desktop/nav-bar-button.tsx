import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from "../../buttons/logout-button";
import LoginButton from "../../buttons/login-button";


const NavBarButtons = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="nav-bar__buttons">
            {!isAuthenticated && (
                <>
                    <LoginButton />
                </>
            )}
            {isAuthenticated && (
                <>
                    <LogoutButton />
                </>
            )}
        </div>
    );
};

export default NavBarButtons;