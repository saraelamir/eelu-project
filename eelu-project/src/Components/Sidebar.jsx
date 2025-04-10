import { Link } from "react-router-dom";
import { FaHome, FaComment, FaQuestionCircle, FaHistory, FaCog, FaPiggyBank, FaSignOutAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light shadow">
      <h4 className="fw-bold mb-4">Wealth Wise</h4>
      <ul className="list-unstyled">
        <li className="mb-3">
          <Link to="/" className="text-decoration-none d-flex align-items-center text-dark">
            <FaHome className="me-2" /> Home Page
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/feedback" className="text-decoration-none d-flex align-items-center text-dark">
            <FaComment className="me-2" /> Feedback
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/help" className="text-decoration-none d-flex align-items-center text-dark">
            <FaQuestionCircle className="me-2" /> Help
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/history" className="text-decoration-none d-flex align-items-center text-dark">
            <FaHistory className="me-2" /> History
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/settings" className="text-decoration-none d-flex align-items-center text-dark">
            <FaCog className="me-2" /> Settings
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/saving-goal" className="text-decoration-none d-flex align-items-center text-dark">
            <FaPiggyBank className="me-2" /> SavingGoal
          </Link>
        </li>
        <li className="mt-4">
          <Link to="/logout" className="text-decoration-none d-flex align-items-center text-danger">
            <FaSignOutAlt className="me-2" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
