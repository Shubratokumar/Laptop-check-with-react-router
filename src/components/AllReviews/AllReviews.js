import React from 'react';
import './AllReviews.css';
import useReview from './../../hooks/useReview';
import Reviews from '../Reviews/Reviews';

const AllReviews = () => {
    const [reviews] = useReview([])
    return (
        <div className='review-container'>
            {
                reviews.map( review => <Reviews review = {review} key = {review.id} ></Reviews>)
            }
        </div>
    );
};

export default AllReviews;