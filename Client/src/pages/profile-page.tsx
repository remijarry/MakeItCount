import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AUTHENTICATION_CONFIG } from "../authenticationConfig";
import { AUTHORIZATION_CONFIG } from "../authorizationConfig";


const ProfilePage = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);

    useEffect(() => {
        const getUserMetadata = async () => {
            try {
                const accessToken = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: AUTHORIZATION_CONFIG.AUDIENCE,
                        scope: AUTHORIZATION_CONFIG.SCOPES.READ,
                    }
                });

                const userDetailsByIdUrl = `https://${AUTHENTICATION_CONFIG.AUTH0_DOMAIN}/api/v2/users/${user.sub}`;
                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const { user_metadata } = await metadataResponse.json();
                setUserMetadata(user_metadata);
            } catch (e) {
                console.log(e.message);
            }
        };

        getUserMetadata();
    }, [getAccessTokenSilently, user?.sub]);


    if (!user) {
        return null;
    }


    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <h3>User Metadata</h3>
                {userMetadata ? (
                    <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                ) : (
                    "No user metadata defined"
                )}
            </div>

        )

    )
}

export default ProfilePage