import "./navbar.scss";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


import logo from '../../asset/Group.svg'


const Navbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  // const { dispatch } = useContext(DarkModeContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="" /> 
        </div>
        <div className="search search">
          <input type="text" placeholder="Search..." value={searchValue} onChange={handleSearchChange} />
         <div className="search-icon">
          <SearchOutlinedIcon />
         </div>
        </div>
        <div className="items">
          <div className="item">
            Doc
          </div>
         
        
          <div className="item">
            <NotificationsNoneIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            
            <p>&nbsp; Munir</p>
            <ArrowDropDownIcon className="icon" />
          </div>  
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
