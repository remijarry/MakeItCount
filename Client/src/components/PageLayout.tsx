import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';

import { loginRequest, b2cPolicies } from '../authConfig';


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

    return (
        <>
            {/* <NavigationBar /> */}
            <br />
            <h5>
                <center>Welcome to the Microsoft Authentication Library For React Tutorial</center>
            </h5>
            <UnauthenticatedTemplate>
                <button onClick={handleLoginRedirect}>Sign In</button>

            </UnauthenticatedTemplate>
            <br />
            {children}
            <br />
            <AuthenticatedTemplate>
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
