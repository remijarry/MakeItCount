import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/profile",
            },
            authorizationParams: {
                prompt: "login",
            },
        });
    };

    //todo: min-width not working
    return (
        <button className="
            last:mr-0
            min-w-[8.4rem]
            border-2 border-indigo-600
            bg-indigo-600
            text-white
            w-1/2
            text-lg
            mr-6
            font-semibold
            leading[3.2rem]
            py-1
            px-2
            rounded-xl
            "

            onClick={handleLogin}>
            Log In
        </button>
    )
}

export default LoginButton