import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error-container'>
            <div className = 'error-message'>
                <h3 className='title'>404, page is not found!!!</h3>
            </div>
            <div className='error-img'>
                <img src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20650.jpg?w=740&t=st=1649152074~exp=1649152674~hmac=d3624b7171559cbad1e82597c6fccfd0ff45add5d810eabf968d7324ae82e311" alt="" />
            </div>
        </div>
    );
};

export default NotFound;