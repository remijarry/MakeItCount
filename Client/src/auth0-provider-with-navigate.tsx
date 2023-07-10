import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { AUTHENTICATION_CONFIG } from "./authenticationConfig";
import { AUTHORIZATION_CONFIG } from "./authorizationConfig";

type Props = {
    children: React.ReactNode;
}

export const Auth0ProviderWithNavigate = ({ children }: Props) => {
    const navigate = useNavigate();
    const onRedirectCallback = (appState) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        navigate(appState?.returnTo || window.location.pathname);
    };

    if (!(
        AUTHENTICATION_CONFIG.AUTH0_DOMAIN &&
        AUTHENTICATION_CONFIG.AUTH0_CLIENT_ID &&
        AUTHORIZATION_CONFIG.CALLBACK_URL)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={AUTHENTICATION_CONFIG.AUTH0_DOMAIN}
            clientId={AUTHENTICATION_CONFIG.AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri: AUTHORIZATION_CONFIG.CALLBACK_URL,
                audience: AUTHORIZATION_CONFIG.AUDIENCE,
                scope: `${AUTHORIZATION_CONFIG.SCOPES.READ} ${AUTHORIZATION_CONFIG.SCOPES.UPDATE}`,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};
