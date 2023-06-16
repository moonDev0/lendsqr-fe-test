import "./sidebar.scss";
import { Link } from "react-router-dom";

import {

  InsertChart as InsertChartIcon,
  SettingsApplications as SettingsApplicationsIcon,
  ExitToApp as ExitToAppIcon,
  NotificationsNone as NotificationsNoneIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  BusinessCenter,House ,PeopleAlt,Diversity3,Savings,RequestQuote,Handshake,GppGood,PersonRemove,
} from "@mui/icons-material";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {


  return (
    <div className="sidebar">
    
      <hr />
      <div className="center">
      
        <ul>
        <li className="org">
            <BusinessCenter className="icon" />
            <span>Swich Organization</span>
          </li>
          <p className="title">CUSTOMERS</p>
          <li>
            <House className="icon" />
            <span>Dashboard</span>
          </li>
          {/* <p className="title">LISTS</p> */}
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAlt className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <Diversity3 className="icon" />
              <span>Guarantors</span>
            </li>
          </Link>
          <li>
            <RequestQuote className="icon" />
            <span>Loans</span>
          </li>
          <li>
            <Handshake className="icon" />
            <span>Decision Model</span>
          </li>
          <li>
            <RequestQuote className="icon" />
            <span>Loan Requests</span>
          </li>
          <li>
            <GppGood className="icon" />
            <span>Whitelist</span>
          </li>
          <li>
            <PersonRemove className="icon" />
            <span>Karma</span>
          </li>
          <p className="title">BUSINESS</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Organization</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Loan Products</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Savings Products</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Fees and Charges</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Transaactions</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Services</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Service Account</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Settlements</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Reports</span>
          </li>
          <p className="title">SETTINGS</p>
                    <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Preference</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Fees and Pricing</span>
          </li>
        
          <li>
            <ExitToAppIcon className="icon" />
            <span>Audit logs</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
      </div>
    </div>
  );
};

export default Sidebar;
