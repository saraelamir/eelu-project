import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "./Pages/Home";
import Feedback from "./Pages/Feedback";
import Settings from "./Pages/Settings";
import Welcome from "./Pages/Welcome";
import Help from "./Pages/Help";
import History from "./Pages/History";
import Input from './Pages/Input';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Landing from './Pages/Landing';
import NotFound from './Pages/NotFound'; 
import Sidebar from "./components/Sidebar";
 import SavingGoal from "./Pages/SavingGoal";



function App() {
  const location = useLocation();

  const noSidebarRoutes = ["/"];

  const showSidebar = !noSidebarRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {showSidebar && <div className="sidebar-container"><Sidebar /></div>}

      <div className={`content ${showSidebar ? "with-sidebar" : "full-width"}`}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Feedback' element={<Feedback />} />
          <Route path='/Help' element={<Help />} />
          <Route path='/History' element={<History />} />
          <Route path='/Input' element={<Input />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/Welcome' element={<Welcome />} />
          <Route path='/saving-goal' element={<SavingGoal />} />
          <Route path='/NotFound' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
