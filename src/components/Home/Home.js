
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
                <p>Easy to learn. Astoundingly powerful. And designed to let you work, play, and create in entirely new ways. It’s the computer that comes packed with apps that are ready to go, right out of the box. Free, regular software updates mean it’s always running at it’s best, and always getting better. ...</p>
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