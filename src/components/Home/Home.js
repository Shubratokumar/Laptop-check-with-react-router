import React from 'react';
import image from "../../assets/images/hero__blumt6ne3xn6_large.jpg";
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='product-description'>
                <h2>This is Mackbook Air</h2>
                <h4>Your next Mackbook</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel maiores consequuntur. Placeat distinctio nisi vero? Quos quae unde placeat, corrupti commodi culpa laborum, incidunt accusantium, dolor debitis rerum voluptate...</p>
                <button className='product-btn'>Why Mac</button>

            </div>
            <div className='product-image'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;