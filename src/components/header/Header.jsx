import React from 'react'
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import "./Header.css";


const Header = () => {
  return (
    <div className="container">
      <GroupsOutlinedIcon className='icon'/>
      <div className="header__container">
        <nav>home</nav>
        <nav>about</nav>
        <nav>contact us</nav>
      </div>
    </div>
  );
}

export default Header