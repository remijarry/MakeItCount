import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { AppProvider } from './contexts/appContext';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain='makeitcount.au.auth0.com'
                clientId='skIn9wSotf0i0s8yjhnWXWHl8RhbeTsq'
                authorizationParams={{
                    redirect_uri: window.location.origin,
                }}
            >
                <AppProvider>
                    <App />
                </AppProvider>

            </Auth0Provider>
        </BrowserRouter>
    </React.StrictMode>
);
