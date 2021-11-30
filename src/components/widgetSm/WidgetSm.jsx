import React from 'react';
import profile1 from '../../img/profile-1.png';
import { Visibility } from '@material-ui/icons';
import './WidgetSm.css';

export default function WidgetSm(){
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New join members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={profile1} alt="profile-1" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Smith</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                      <Visibility className="widgeSmIcon"/>
                       Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src={profile1} alt="profile-1" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Smith</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                      <Visibility className="widgeSmIcon"/>
                       Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src={profile1} alt="profile-1" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Smith</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                      <Visibility className="widgeSmIcon"/>
                       Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src={profile1} alt="profile-1" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Smith</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                      <Visibility className="widgeSmIcon"/>
                       Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src={profile1} alt="profile-1" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Smith</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                      <Visibility className="widgeSmIcon"/>
                       Display
                    </button>
                </li>
            </ul>
        </div>
    )
}