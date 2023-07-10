import { withAuthenticationRequired } from "@auth0/auth0-react";
import { PageLoader } from "./page-loader";

type Props = {
    component: React.ComponentType<any>;
};

export const AuthenticationGuard = ({ component }: Props) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div className="page-layout">
                <PageLoader />
            </div>
        ),
    });

    return <Component />;
};
