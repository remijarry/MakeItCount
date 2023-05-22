import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { getWorkouts } from '../utils/webApiUtils';

import { loginRequest, protectedResources } from '../authConfig';
import { useEffect, useState } from 'react';
import Container from '@mui/system/Container';


interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
    const { instance, inProgress } = useMsal();
    let activeAccount;

    if (instance) {
        activeAccount = instance.getActiveAccount();
    }


    const handleLoginRedirect = () => {
        instance.loginRedirect(loginRequest).catch((error) => console.log(error));
    };

    const handleLogoutRedirect = () => {
        instance.logoutRedirect();
    };

    const handleLogoutPopup = () => {
        instance.logoutPopup({
            mainWindowRedirectUri: '/', // redirects the top level app after logout
        });
    };

    const handleLoginPopup = () => {
        instance
            .loginPopup({
                ...loginRequest,
                redirectUri: '/redirect',
            })
            .catch((error) => console.log(error));
    };



    const WorkoutContent = () => {
        const [workoutsData, setWorkoutsData] = useState(null);

        const { instance, inProgress, accounts } = useMsal();


        useEffect(() => {
            if (!workoutsData && inProgress === InteractionStatus.None) {
                const accessTokenRequest = {
                    scopes: protectedResources.apiWorkoutsList.scopes.read,
                    accounts: accounts[0]
                };

                instance
                    .acquireTokenSilent(accessTokenRequest)
                    .then((response) => {
                        getWorkouts(response.accessToken).then((response) => setWorkoutsData(response));
                    });
            }
        }, [instance, accounts, inProgress, workoutsData]);


        if (workoutsData) {
            return (
                <>
                    <div>
                        api result: {workoutsData.length}
                    </div>
                </>
            );
        } else {
            return <> <div> fetch failed! </div> </>;
        }

    }
    return (
        <>
            {/* <NavigationBar /> */}
            <br />
            <h5>
                <center>Welcome to the Microsoft Authentication Library For React Tutorial</center>
            </h5>
            <UnauthenticatedTemplate>
                <button onClick={handleLoginPopup}>Sign In using popup</button>

            </UnauthenticatedTemplate>
            {/* <br />
            {children}
            <br /> */}
            <AuthenticatedTemplate>
                <Container>
                    <div>
                        <WorkoutContent />
                    </div>
                </Container>
                <button onClick={handleLogoutRedirect}>
                    Sign out using Redirect
                </button>
                <footer>
                    <center>
                        How did we do?
                        <a
                            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR73pcsbpbxNJuZCMKN0lURpUMlRHSkc5U1NLUkxFNEtVN0dEOTFNQkdTWiQlQCN0PWcu"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {' '}
                            Share your experience!
                        </a>
                    </center>
                </footer>
            </AuthenticatedTemplate>
        </>
    );
};
