import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Feedback from "./Pages/Feedback";
import Settings from "./Pages/Settings";
import Welcome from "./Pages/Welcome";
import Help from "./Pages/Help";
import History from "./Pages/History";
import Input from "./Pages/Input";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Landing from "./Pages/Landing";
import NotFound from "./Pages/NotFound";
import Sidebar from "./components/Sidebar";
import SavingGoal from "./Pages/SavingGoal";

function App() {
  const location = useLocation();

  // Define routes where the sidebar should be hidden (using lowercase for consistency)
  const noSidebarRoutes = ["/", "/welcome"];

  // Normalize the current path to lowercase
  const currentPath = location.pathname.toLowerCase();

  // Check if the current path is in the noSidebarRoutes array (case-insensitive)
  const showSidebar = !noSidebarRoutes.includes(currentPath);

  return (
    <div className="app-container">
      {showSidebar && (
        <div className="sidebar-container">
          <Sidebar />
        </div>
      )}

      <div className={`content ${showSidebar ? "with-sidebar" : "full-width"}`}>
        <Routes>
          {/* Ensure route paths are lowercase to match the noSidebarRoutes */}
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/help" element={<Help />} />
          <Route path="/history" element={<History />} />
          <Route path="/input" element={<Input />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/saving-goal" element={<SavingGoal />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
