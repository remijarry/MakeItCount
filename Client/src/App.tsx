import { useAuth0 } from "@auth0/auth0-react";

import './styles/index.css'
import NavBar from "./components/navigation/desktop/nav-bar";
import { Route, Routes } from "react-router-dom";
import { AuthenticationGuard } from "./components/authentication-guard.js";
import ProfilePage from "./pages/profile-page.js";

function App() {
  const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return (
  //     <div>
  //       <PageLoader />
  //     </div>

  //   )
  // }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/profile"
          element={<AuthenticationGuard component={ProfilePage} />}
        />
      </Routes>
    </>
  )
}

export default App
