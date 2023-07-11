import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarBrand = () => {
    return (
        <div className="flex items-center h-screen mr-16">
            <NavLink to="/">
                <img
                    className="h-14"
                    src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
                    alt="Auth0 shield logo"
                    width="122"
                    height="36"
                />
            </NavLink>
        </div>
    )
}

export default NavBarBrand