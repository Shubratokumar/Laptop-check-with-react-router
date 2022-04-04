import React from 'react';
import './Reviews.css'

const Reviews = ({review}) => {
    const {image, name, ratings, description} = review;
    return (
        <div className='reviewer'>
            <div className='reviewer-image'>
                <img src={image} alt="" />
            </div>
            <div className='reviewer-description'>
                <h2>{name}</h2>
                <p>"{description}" <small>- {name}</small></p>
                <p><small>Ratings : {ratings}/5</small></p>
            </div>
        </div>
    );
};

export default Reviews;