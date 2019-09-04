import React from 'react';
import Jobview from './jobview.jsx';
import Filter from './Filter.jsx';
import Footer from './Footer.jsx';

function Main() {
    return (
        <div class="addpad">
            <Filter/>
            <Jobview color="violet" price="400$" jobtitle="How to Build E-commerece Platform step by step"/>
            <Jobview color="tomato" price="100$" jobtitle="How to Build E-commerece Platform step by step"/>
            <Jobview color="orange" price="200$" jobtitle="How to Build E-commerece Platform step by step"/>
            <Jobview color="orange" price="300$" jobtitle="How to Build E-commerece Platform step by step"/>
            <Jobview color="blue" price="400$" jobtitle="How to Build E-commerece Platform step by step"/>

            <Footer/>
        </div>
    );
}

export default Main;