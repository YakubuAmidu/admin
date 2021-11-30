import React from 'react';
import './FeaturedInfo.css';
import { ArrowDownward } from '@material-ui/icons';

export default function FeaturedInfo(){
 return (
     <div className="featured">
         <div className="featuredItem">
             <span className="featuredTitle">Revenue</span>
             <div className="featuredMoneyContainer">
                 <span className="featuredMoney">$2,145</span>
                 <span className="featuredRate">-11.45 <ArrowDownward /></span>
             </div>
             <span className="featuredSub">Compared to last month</span>
         </div>
     </div>
 )
}