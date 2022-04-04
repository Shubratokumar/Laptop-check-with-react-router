import React from 'react';
import MyLineChart from '../Charts/MyLineChart';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div className='chart-container'>
            <div className = 'monthly-sell'>
                <h3 className='title'>Sells VS Investment</h3>
                <MyLineChart></MyLineChart>
            </div>
            <div className='invest-revenue'>
                <h3>Revenue VS Investment</h3>
                
            </div>
        </div>
    );
};

export default Dashboard;