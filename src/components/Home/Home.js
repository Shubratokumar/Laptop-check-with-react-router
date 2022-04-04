
import { useNavigate } from 'react-router-dom';
import image from "../../assets/images/hero__blumt6ne3xn6_large.jpg";
import useReview from '../../hooks/useReview';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [reviews] = useReview([])

    return (
        <>
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
        <div className='reviews-container'>
            <h3>Customer Reviews({reviews.length})</h3>
            <div className = 'review-container'>
                {
                    reviews.slice(0,3).map(review => <Reviews 
                        review = {review}
                        key = {review.id}
                         ></Reviews>)
                }
            </div>
            <button onClick = {() => navigate('/allreviews')}>See All Reviews</button>
        </div>
        </>
    );
};

export default Home;