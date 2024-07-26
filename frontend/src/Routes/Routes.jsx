import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import AlertForm from "../Pages/AlertForm";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AlertList from "../components/Alerts/AlertList";
import { EditAlert } from "../Pages/EditAlert";

export default function AppRoutes() {
  return (
    // Define the routing structure for the application
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Signup />}></Route>
      <Route path="/alertform" element={<AlertForm />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/alerts" element={<AlertList />}></Route>
      <Route path="/editalert/:id" element={<EditAlert />}></Route>
    </Routes>
  );
}
