import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {Layout, Typography} from 'antd';
import {Navbar,ProjectManagement,Home,DataCollection,Reporting,RiskManagement} from './components';
import './App.css';
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
         <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route  path="/projectmanagement"  element={<ProjectManagement/>}/>
              <Route  path="/datacollection"  element={<DataCollection/>}/>
              <Route  path="/reporting"  element={<Reporting/>}/>
              <Route  path="/riskmanagement"  element={<RiskManagement/>}/>
            </Routes>
          </div>
        </Layout>
        <div className="footer" >
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}} >
        COMESA M&E Portal <br/>
        All rights reserved.
        </Typography.Title>
      </div>
     
      </div>
     
    </div>
  )
}

export default App
