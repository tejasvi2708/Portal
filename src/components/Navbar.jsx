import React from 'react'
import {Typography, Menu,Button, Avatar} from "antd";
import {MenuOutlined} from'@ant-design/icons';
import { useEffect, useState } from 'react';
import {Link } from "react-router-dom";
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
      const handleResize=()=> setScreenSize(window.innerWidth);
      window.addEventListener('resize',handleResize);

      handleResize();

      return ()=> window.removeEventListener('resize', handleResize)
    }, [])
     useEffect(() => {
       if(screenSize<768){
        setActiveMenu(false)
       }
       else
       setActiveMenu(true);
     }, [screenSize])
     
  return (
    <div className="nav-container">
        <div className="logo-container">          
            <h1 className="logo">
                <Link to="/">COMESA</Link>
            </h1>
           
        </div>
        <Button className="menu-control-container" onClick={()=> setActiveMenu(!activeMenu)}>
          <MenuOutlined/>
        </Button>
        
        {activeMenu && (
        <div className="menu-container">
            <ul className="list-items">
                <li className="item"><Link to="/">Home</Link></li>
                <li className="item"> <Link to="/projectmanagement">Project Management</Link></li>
                <li className="item"> <Link to="/datacollection">Data Collection</Link></li>
                <li className="item"> <Link to="/reporting">Reporting</Link></li>
                <li className="item"> <Link to="/riskmanagement">Risk Management</Link></li>
            </ul>
            <div className="button-cont">
            <button className="btn">Join Us</button>
            </div>
            
        </div>
    )}
    </div>
  )
}

export default Navbar