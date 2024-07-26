import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar/layout";
import AppRoutes from "./Routes/Routes";
import { BrowserRouter, useLocation } from "react-router-dom";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Main />
      </UserProvider>
    </BrowserRouter>
  );
}

function Main() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/"; // Adjust this if your login route is different

  return (
    <>
      {!hideNavbar && <Navbar />}
      <AppRoutes />
    </>
  );
}

export default App;
