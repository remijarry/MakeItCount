import { useMsal } from '@azure/msal-react';
import NavbarTop from '../components/navbar-top/navbar-top.component';
import { Outlet } from 'react-router-dom';

/***
 * Component to detail ID token claims with a description for each claim. For more details on ID token claims, please check the following links:
 * ID token Claims: https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#claims-in-an-id-token
 * Optional Claims:  https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#v10-and-v20-optional-claims-set
 */
export const Home = () => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

    return (
        <>
            <NavbarTop title='Home' />
            
            <Outlet />
        </>
    );
};

export default Home;