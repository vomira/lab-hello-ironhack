import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


const navbar = 
<div className='navbar'>
    <img src="./images/ironhack-logo.svg" alt="ironhack-logo"/>
    <img src="./images/menu-top.svg" alt="navbarmenu"/>
</div>

const mainLanding = 
<div className='mainLanding'>
    <div className='mainContainer'>
    <h1>Say hello to 
    <br/>
    ReactJS</h1>
    <p>You will learn a Frontend 
    <br/>
    Framework from scratch to 
    <br/>
    become a ninja developer.</p>
    <button>Awesome!</button>
    </div>
</div>

const pitchBanner = 
<div className='pitchBanner'>
    <div class='pitchContainer'>
        <img src="./images/icon1.png" alt="icon1"/>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div class='pitchContainer'>
        <img src="./images/icon2.png" alt="icon2"/>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
    </div>
    <div class='pitchContainer'>
        <img src="./images/icon3.png" alt="icon3"/>
        <h3>Single-Way</h3>
        <p>A set of immutable components are passed to the components.</p>
    </div>
    <div class='pitchContainer'>
        <img src="./images/icon4.png" alt="icon4"/>
        <h3>JSX</h3>
        <p>Statically typed, designed to run on modern browsers.</p>
    </div>
</div>

const content = 
<div>
    {navbar}
    {mainLanding}
    {pitchBanner}
</div>

ReactDOM.render(
    content,
    document.getElementById('root')
)