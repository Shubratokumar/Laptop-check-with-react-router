import React from 'react';
import MyBarChart from '../Charts/MyBarChart';
import MyLineChart from '../Charts/MyLineChart';
import MyPieChart from '../Charts/MyPieChart';
import MyRadarChart from '../Charts/MyRadarChart';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div className='chart-container'>
            <div className = 'sell-invest'>
                <h3 className='title'>Sells VS Investment</h3>
                <MyLineChart></MyLineChart>
            </div>
            <div className='sell-revenue'>
                <h3 className='title'>Sells VS Revenue</h3>
                <MyBarChart></MyBarChart>
            </div>
            <div className='invest-revenue'>
                <h3 className='title'>Revenue VS Investment</h3>
                <MyPieChart></MyPieChart>
            </div>
            <div className='month-sell'>
                <h3 className='title'>Month VS Sell</h3>
                <MyRadarChart></MyRadarChart>
            </div>
        </div>
    );
};

export default Dashboard;