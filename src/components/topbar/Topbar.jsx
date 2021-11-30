import React from 'react';
import './Topbar.css';
import profile from '../../img/profile.png';
import  { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar(){
   return (
       <div className="topbar">
           <div className="topbarWrapper">
               <div className="topLeft">
                   <span className="logo">
                       Yakubuadmin
                   </span>
               </div>
               <div className="topRight">
                   <div className="topbarIconContainer">
                      <NotificationsNone />
                      <span className="topIconBadge">2</span>
                   </div>

                   <div className="topbarIconContainer">
                      <Language />
                      <span className="topIconBadge">2</span>
                   </div>

                   <div className="topbarIconContainer">
                      <Settings />
                   </div>
                   <img src={profile} className="topAvatar" alt="profile"/>
               </div>
           </div>
       </div>
   );
}