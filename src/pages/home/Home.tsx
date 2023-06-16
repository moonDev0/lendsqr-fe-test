import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import {Widget} from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import  {BusinessCenter} from "@mui/icons-material";
import userIcons from "../../asset/icon (4).png"
import activeUsericon from "../../asset/icon.png"
import loansIcon from '../../asset/icon (3).png'
import userSavingIcon from "../../asset/icon (6).png"


  const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Sidebar />
      
      <div className="homeContainer">
      {/* <Navbar /> */}
     
      <h3>Users</h3>
        <div className="widgets">

          {/* <Widget name='munir' icon='said' /> */}
          <Widget name="USERS" icon={userIcons}/>
          <Widget name="ACTIVE USERS" icon={activeUsericon}/>
          <Widget name="USERS WITH LOAN" icon={loansIcon}/>
          <Widget name="USERS WITH SAVINGS" icon={userSavingIcon}/>
          
       
        </div>
       
        <div className="listContainer">
          
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
