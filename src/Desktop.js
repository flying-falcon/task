import React from 'react';
import './App.css';
import NavBar from './NavBar.jsx';
import Jobview from './jobview.jsx';
import Filter from './Filter.jsx';
import Footer from './Footer.jsx';
import SideBar from './SideBar.jsx';
import Main from './Main.jsx';
function Desktop() {
  return (
        <div class="row">
            <SideBar/>
            <div class="main">
                <NavBar/>
                <Main/>
            </div>
        </div>
  );
}

export default Desktop;