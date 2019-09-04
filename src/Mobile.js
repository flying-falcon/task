import React from 'react';
import './App.css';
import NavBar from './NavBar.jsx';
import Card from './Card.jsx';
import Filter from './Filter.jsx';
import Footer from './Footer.jsx';

function Mobile() {
  return (

            <div>

                <NavBar/>
                <Filter/>
                <Card color="violet" price="400$" jobtitle="How to Build E-commerece Platform step by step"/>
                <Card color="tomato" price="100$" jobtitle="How to Build E-commerece Platform step by step"/>
                <Card color="orange" price="200$" jobtitle="How to Build E-commerece Platform step by step"/>
                <Footer/>
            </div>
  );
}

export default Mobile;