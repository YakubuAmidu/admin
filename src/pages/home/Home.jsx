import React from 'react';
import './Home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/chart';
import { userData } from '../../dummyData';

export default function Home(){
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User analytics" grid datakey="Active User"/>
        </div>
    )
}