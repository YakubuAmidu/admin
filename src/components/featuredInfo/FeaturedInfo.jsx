import React from 'react';
import './FeaturedInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo(){
 return (
     <div className="featured">
         <div className="featuredItem">
             <span className="featuredTitle">Revenue</span>
             <div className="featuredMoneyContainer">
                 <span className="featuredMoney">$2,145</span>
                 <span className="featuredRate">- 11.45 
                 <ArrowDownward className="featuredIcon negative"/>
                 </span>
             </div>
             <span className="featuredSub">Compared to last month</span>
         </div>

         <div className="featuredItem">
             <span className="featuredTitle">Sales</span>
             <div className="featuredMoneyContainer">
                 <span className="featuredMoney">$4,145</span>
                 <span className="featuredRate">- 2.45 
                 <ArrowDownward className="featuredIcon negetive"/>
                 </span>
             </div>
             <span className="featuredSub">Compared to last month</span>
         </div>

         <div className="featuredItem">
             <span className="featuredTitle">Cost</span>
             <div className="featuredMoneyContainer">
                 <span className="featuredMoney">$4,145</span>
                 <span className="featuredRate">+ 2.45 
                 <ArrowUpward className="featuredIcon negative"/>
                 </span>
             </div>
             <span className="featuredSub">Compared to last month</span>
         </div>
     </div>
 )
}