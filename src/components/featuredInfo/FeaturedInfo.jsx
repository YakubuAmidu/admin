import React from 'react';
import './FeaturedInfo.css';

export default function FeaturedInfo(){
 return (
     <div className="featured">
         <div className="featuredItem">
             <span className="featuredTitle">Revenue</span>
             <div className="featuredMoneyContainer">
                 <span className="featuredMoney">$2,145</span>
                 <span className="featuredRate">-11.45</span>
             </div>
         </div>
     </div>
 )
}