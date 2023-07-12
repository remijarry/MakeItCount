import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

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
        <div className="p-2.5 mt-3 flex items-center rounded-md px-6 duration-300 cursor-pointer hover:bg-slate-800"
        >
            <Link to='/login' className="text-[15px] text-slate-400 font-bold hover:text-slate-50">Log In</Link>
        </div>
    )
}

export default LoginButton

// last:mr-0
// min-w-[8.4rem]
// border-2 border-indigo-600
// bg-indigo-600
// text-white
// w-1/2
// text-lg
// mr-6
// font-semibold
// leading[3.2rem]
// py-1
// px-2
// rounded-xl